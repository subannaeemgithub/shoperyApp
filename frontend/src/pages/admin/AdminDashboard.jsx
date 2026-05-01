import React, { useEffect, useState } from 'react'
import { deleteProductById, getAllProducts } from '../../services/ProductApi';
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
const[products,setProducts]=useState([]);
const[load,setLoad]=useState(false);
const[error,setError]=useState(null);
const[message,setMessage]=useState("")

//fetch All products
const fetchProducts=async()=>{
    try {
        setLoad(true);
    setError(null);
    const data = await getAllProducts();
    setProducts(data.data);    
    } catch (error) {
        setError("could not load products")
        console.log(error)
    }
    finally{
        setLoad(false)
    }
    
}

//delete product
const handelDelete = async (id) => {

    // 1️⃣ User se confirmation lena
    const confirmDelete = window.confirm(
        "Kya aap sure hain ke yeh product delete karna hai?"
    );

    // Agar user cancel kare to function stop
    if (!confirmDelete) return;

    try {

        // 2️⃣ Backend ko delete request bhejna
        const data = await deleteProductById(id);

        // 3️⃣ UI se product remove karna (state update)
        setProducts(prev =>
            prev.filter(product => product._id !== id)
        );

        // 4️⃣ Success message show karna
        setMessage({
            variant: 'success',
            message: data.message
        });

        // 5️⃣ Message auto hide after 3 sec
        setTimeout(() => {
            setMessage(null);
        }, 3000);

    } catch (error) {

        // 6️⃣ Error case message
        setMessage({
            variant: 'danger',
            message: 'Could not delete product!'
        });

        setTimeout(() => {
            setMessage(null);
        }, 3000);
    }
};







useEffect(()=>{
    fetchProducts();
},[])


  return (
    <div>
      
      <Container>
        <div className='h3 d-flex justify-content-between my-5'>popular products <span><Button className="btn btn-success"  as={Link} to={'/add/product'}   >Add product</Button></span></div>
        <Row>
           {products.map((product)=>(
            <div className="col-lg-2 col-md-3 col-sm-2 my-3">
                 <Card>
      
      {/* IMAGE */}
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <Card.Body>

        {/* NAME */}
        <Card.Title>{product.name}</Card.Title>

        {/* PRICE + CART ICON SAME LINE */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: 0 }}>${product.price}</h5>
        </div>

        {/* RATING */}
        <div style={{ marginTop: "8px" }}>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <span style={{ marginLeft: "5px" }}>4.5</span>
        </div>

      </Card.Body>
       <Card.Footer>
        <Button as={Link} to={`/edit/product/${product._id}`} variant="success">Edit</Button>{' '}
        <Button variant="danger" onClick={()=>handelDelete(product._id)} >Delete</Button>
      </Card.Footer>
    </Card>
            </div>
           ))}
        </Row>
      </Container>

    </div>
  )
}

export default AdminDashboard
