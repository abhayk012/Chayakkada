import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispath = useDispatch()
  return (
    <>
     <Navbar style={{background:"orange"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:"none", color:"black",fontWeight:"bold",fontFamily:"'Noto Sans Malayalam', sans-serif"}}> <img src="https://cdn-icons-png.flaticon.com/512/1047/1047460.png" alt="" height={"40px"}/> ചായക്കടകൾ </Link></Navbar.Brand>
          <div className='d-flex align-item-center' style={{width:"1000px",marginLeft:"300px"}}>
          <i class="fa-solid fa-magnifying-glass fa-fade fa-xl me-2 mt-4" style={{color:"black"}}></i>
          <input type="text"  className='form-control w-25 bg-light' 
          onChange={(e)=>dispath(search(e.target.value))}
          />
          </div>
          
          <img 
          height="50px"
          width="50px"
          src="https://img.freepik.com/premium-vector/restaurant-icon-concept-with-icon-design_24911-17835.jpg" alt="" />
        </Container>
      </Navbar>
    </>
  )
}

export default Header