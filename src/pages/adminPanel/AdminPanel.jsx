import React, { useState } from 'react'
import Headers from '../../components/headers/Headers'
import './adminPanel.css'
import AdminCat from './AdminCat'
import AdminProduct from './AdminProduct';

export default function AdminPanel() {
    const [admin_cat, set_admin_cat] = useState(false);
    const [admin_product, set_admin_product] = useState(false);

    const adminCatDisplay = () => {
        set_admin_cat(prevState => {
            set_admin_product(false);
            return !prevState
        })
    } 
    const adminProductDisplay = () => {
        set_admin_product(prevState => {
            set_admin_cat(false);
            return !prevState
        })
    } 
  return (
    <div>
        <Headers />
        <div className="admin_page d-flex">
            <div className="side_par">
                <ul className='side_par_sections'>
                    <li onClick={adminCatDisplay}>Categoruy</li>
                    <li onClick={adminProductDisplay}>Products</li>
                    <li>Orders</li>
                    <li>Users</li>
                </ul>
            </div>
            {admin_cat && <AdminCat />}
            {admin_product && <AdminProduct />}
        </div>
    </div>
  )
}
