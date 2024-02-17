import React, { useEffect, useState } from 'react'
import axios from 'axios'
import delete_image from '../../components/images/delete-message.png';



export default function AdminProduct() {
    const [catList, setCatList] = useState([]);
    const [productList, setProductList] = useState([]);

    const [brand, setProductBrand ] = useState('');
    const [status, setProductType ] = useState('');

    const [cat, setProductCat ] = useState('');

    const [model, setProductName ] = useState('');
    const [name, setProductModel ] = useState('');
    const [color, setProductColor ] = useState('');
    const [processor, setProductProcessor ] = useState('');
    const [gpu, setProductGpu ] = useState('');
    const [screen, setProductScreen ] = useState('');
    const [ram, setProductRam ] = useState('');
    const [hard, setProductHard ] = useState('');
    const [os, setProductOs ] = useState('');
    const [guranti, setProductGuranti ] = useState('');
    const [quant, setProductQuant ] = useState(0);
    const [price, setProductPrice ] = useState(0);
    const [desc, setProductDesc ] = useState('');
    const [picture, setProductPicture ] = useState(null);


    const token = localStorage.getItem('token');

    const handleDelete = (categoryId) => {
        axios.delete(`http://localhost:8000/products/delete_Product/${categoryId}`).then(() => {
            fetchProduct();
          })

    }

    const fetchCat = () => {
            axios.get('http://localhost:8000/category/get_category', { 
              headers:{
                Accept: "application/json",
                Authorization: "Bearer" + token,
              },})
              .then((cat) => setCatList(cat.data))
    }
    const fetchProduct = () => {
        axios.get('http://localhost:8000/products/get_product', { 
          headers:{
            Accept: "application/json",
            Authorization: "Bearer" + token,
          },})

          .then((product) => {
            console.log(product.data);

            setProductList(product.data)})

    }

    useEffect ( () => {
        fetchCat();
        fetchProduct();}

        , [token]
    )
        
    const handleImageChange = (e) => {
        setProductPicture(e.target.files[0]);
      };

      async function Submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("brand", brand);
        formData.append("status", status);
        formData.append("cat", cat);
        formData.append("model", model);
        formData.append("name", name);
        formData.append("color", color);
        formData.append("processor", processor);
        formData.append("gpu", gpu);
        formData.append("screen", screen);
        formData.append("ram", ram);
        formData.append("hard", hard);
        formData.append("os", os);
        formData.append("guranti", guranti);
        formData.append("quant", quant);
        formData.append("price", price);
        formData.append("picture", picture);
        formData.append("desc", desc);
        
        try {
            const res = await axios.post('http://localhost:8000/products/add_product',
            formData ,{
                headers: {       
                    Accept: "application/json",
                    Authorization: "Bearer" + token,  
                }
            }).then(() => {
                fetchProduct();
              })
            
        } catch (error) {
            console.error('Error adding Product:', error);
            console.log('faild added new Product');
        }
      }
    

  return (
    <div className='main_page'>
    <div className="">
                <h2>Add New Product</h2>
            <form action=""  onSubmit={Submit} className='add_form'>
                    
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="form-group form-group-admin">
                        <label htmlFor="">Product Brand </label>
                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="brand" 
                            value={brand} 
                            onChange={(e) => setProductBrand(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Type </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="status" 
                            value={status} 
                            onChange={(e) => setProductType(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Category </label>
                    <br />
                        <select className='info_input' value={cat} onChange={ (e) => setProductCat(e.target.value)}>
                            <option value="">Select Category</option>
                            {
                                catList.map(cat => (
                                    <option key={cat.id} value={cat.id}>
                                      {cat.cat_name}
                                    </option>
                                    
                                ))
                            }

                        </select>
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Name </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="name" 
                            value={name} 
                            onChange={(e) => setProductName(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Model </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="model" 
                            value={model} 
                            onChange={(e) => setProductModel(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Color </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="color" 
                            value={color} 
                            onChange={(e) => setProductColor(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Proceesor </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="processor" 
                            value={processor} 
                            onChange={(e) => setProductProcessor(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product GPU </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="gpu" 
                            value={gpu} 
                            onChange={(e) => setProductGpu(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Screen </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="screen" 
                            value={screen} 
                            onChange={(e) => setProductScreen(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product RAM </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="ram" 
                            value={ram} 
                            onChange={(e) => setProductRam(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Hard </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="hard" 
                            value={hard} 
                            onChange={(e) => setProductHard(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product OS </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="os" 
                            value={os} 
                            onChange={(e) => setProductOs(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Guranti </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="guranti" 
                            value={guranti} 
                            onChange={(e) => setProductGuranti(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Quant </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="number" 
                            name="quant" 
                            value={quant} 
                            onChange={(e) => setProductQuant(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Price </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="number" 
                            name="price" 
                            value={price} 
                            onChange={(e) => setProductPrice(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                    <label htmlFor="">Product Description </label>

                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="desc" 
                            value={desc} 
                            onChange={(e) => setProductDesc(e.target.value)} 
                            id="" />
                    </div>
                    <div className="form-group form-group-admin">
                        <label htmlFor="">Product Picture </label>
                        <br />
                        <input className='image_input' 
                            type="file" 
                            onChange={handleImageChange} 
                        id="" />
                    </div>
                </div>
                <div className="form-group form-group-admin">
                    <button className="mt-3 add-btn" type="submit">Add Product</button>
                </div>
            </form>
    </div>
                <div className="list_admin">
                    <ul  className='job_list'>
                        <li>
                        <h4>id</h4>
                        <h4>name</h4>
                        <h4>Model</h4>
                        <h4>Quant</h4>
                        <h4>Price</h4>
                        <h4></h4>


                        </li>
                        {
                            productList.map(item => (
                                <li>
                                    <p>{item.id}</p>
                                    <p>{item.name}</p>
                                    <p>{item.model}</p>
                                    <p>{item.quant}</p>
                                    <p>{item.price}</p>
                                    <button  onClick={() => handleDelete(item.id)} id='delet_jop_icon' style={{ border: 'none' }}>
                                        <img width={25} src={delete_image} alt="" />
                                    </button>                 
                                </li>

                            ))
                        }

                    </ul>
                    

                </div>
    </div>
  )
}
