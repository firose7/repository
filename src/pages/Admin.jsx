import React from "react";
import { useNavigate } from 'react-router-dom'
import './Adminpage.css'
const Admin = () => {

    const navigate = useNavigate()

    function editUser(){
        navigate("/edituser")
    }

    function editProduct(){
        navigate("/productdetails")
    }
    return (
        <div className="adminpage">
            <h1 className="aph1">Welcome Admin</h1>
            <div className="adminedits">
                <p>Edit user details <button onClick={editUser}>Click here!</button></p>
                <br/>
                <p>Edit Product details <button onClick={editProduct}>Click here!</button></p>
            </div>
     
        </div>
    )
}

export default Admin;