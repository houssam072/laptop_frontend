import axios from 'axios'
import React, { useEffect, useState } from 'react';
import delete_image from '../../components/images/delete-message.png';


export default function AdminCat() {
    const [catList, setCatList] = useState([]);
    const [cat_name, setCatName] = useState('');
    const [cat_image, setCatImage] = useState(null);
    const token = localStorage.getItem('token');
    console.log(cat_name);

    
    const handleImageChange = (e) => {
        setCatImage(e.target.files[0]);
      };

    async function Submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cat_name", cat_name);
    formData.append("cat_image", cat_image);
    console.log("cat Name",cat_name);
    console.log("cat Image",cat_image);
    
    try {
        const res = await axios.post('http://localhost:8000/category/add_category',
        formData ,{
            headers: {       
                Accept: "application/json",
                Authorization: "Bearer" + token,  
            }
        }).then(() => {
            fetchCat();
          })
        
    } catch (error) {
        console.error('Error adding category:', error);
        console.log('faild added new category');
    }
  }

  
  const handleDelete = (categoryId) => {
    axios.delete(`http://localhost:8000/category/delete_category/${categoryId}/`).then(() => {
        fetchCat();
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
    
  useEffect( () => {
    fetchCat();
  }, [])

  


  return (
    <div className='main_page'>
    <div className="operation">
                <h2>Add New Category</h2>
            <form action="" onSubmit={Submit} className='add_form'>
                    
                <div className="d-flex justify-content-between">
                    <div className="form-group form-group-admin">
                        <input className='info_input' 
                            placeholder='Enter Your New Cat Name...' 
                            type="text" 
                            name="cat_name" 
                            value={cat_name} 
                            onChange={(e) => setCatName(e.target.value)} 
                        id="" />
                    </div>
                    <div className="form-group form-group-admin">
                        <input className='image_input' 
                            type="file" 
                            onChange={handleImageChange} 
                        id="" />
                    </div>
                </div>
                <div className="form-group form-group-admin">
                    <button className="mt-3 add-btn" type="submit">Add Category</button>
                </div>
            </form>
    </div>
                <div className="list_admin">
                    <ul  className='job_list'>
                        <li>
                        <h4>id</h4>
                        <h4>category</h4>
                        <h4></h4>


                        </li>
                        {
                            catList.map(cat => (
                                <li>
                                    <p>{cat.id}</p>
                                    <p>{cat.cat_name}</p>
                                    <button onClick={() => handleDelete(cat.id)} id='delet_jop_icon'  style={{ border: 'none' }}>
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
