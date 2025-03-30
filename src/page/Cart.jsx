import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCartList,emptycart } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch()
  const cartArray = useSelector(state => state.cartItems);
  const[total, setTotal]=useState(0);
  const navigate =useNavigate();
  const getTotal =()=>{
    let sum=0;
    cartArray.forEach((item)=>{
      sum =sum+item.price
    })
    setTotal(sum);
  }
  useEffect(()=>{
getTotal();
  },[cartArray])

  console.log("Cart Array");
  console.log(cartArray);
const checkout=()=>{
  alert("Your oreder successfully placed !!");
  dispatch(emptycart());
  navigate('/');
}

  return (
    <>
    <div style={{marginTop:'100px'}} className='container-fluid mb-5'>
      {
        cartArray.length>0?
        <div className="row w-100">
        <div className="col-md-6 col-lg-6">
          <table className='table show border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray.map((item,index)=>(
                  <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img src={item.image} alt="" style={{height:'30px'}} /></td>
                <td>&#x20B9; {item.price}</td>
                <td>
                  <button variant="outline-danger" onClick={()=>dispatch(removeItemFromCartList(item.id))}>
                    <i className="fa-solid fa-trash"></i>
                    
                  </button>
                  
                  </td>
              </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-lg-4 ">
          <div className='border shadow p-3'>
            <h3>Cart Summary</h3>
            <h5>Total Number Of Product <span className='fw-bolder fs-5 text-warning'>{cartArray.length}</span></h5>
            <h5>Total Price: <span className='fw-bolder fs-5 text-warning'> &#x20B9;{total}</span></h5>
            <button className='btn btn-success rounded w-100 mt-3'onClick={checkout}>CHECKOUT</button>
          </div>
        </div>
      </div>:
      <div style={{height:'55vh'}}>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://cdn.dribbble.com/userupload/9027784/file/original-1a589755fb362d4d41485be3322fee16.jpg?resize=400x0" alt="" />
        <h3 className='text-danger mt-3'>your Cart is empty</h3>
        <Link to={'/'}>
        <button className='btn btn-success mt-3'><i class="fa-solid fa-arrow-left"></i> Back To Home</button>
        </Link>
        
        
        

      </div>
    </div>
      }

    </div>
      
    </>
  )
}

export default Cart