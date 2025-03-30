import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeItemFromWishlist } from '../redux/wishList';
import { addtoCart } from '../redux/cartSlice';

function Wishlist() {
  const wishlistArray =useSelector((state)=>state.wishListItems);
  const dispatch =useDispatch();
  console.log("wishList");
  
  console.log(wishlistArray);
  const handleWishList=(data)=>{
    dispatch(addtoCart(data));
    dispatch(removeItemFromWishlist(data.id));

  }
  
  return (
    <>
    <Row className='m-5'>
        {
          wishlistArray.length > 0 ?
            wishlistArray.map(item => (
              <Col className='mb-3' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                      <p className='fw-bolder'> price &#x20B9; {item.price}</p>

                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={()=>dispatch(removeItemFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success" onClick={()=>handleWishList(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                    </div>

                  </Card.Body>
                </Card>
              </Col>
            )) : 
            <div>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://cdn.dribbble.com/userupload/9027784/file/original-1a589755fb362d4d41485be3322fee16.jpg?resize=400x0" alt="" />
                <h3 className='text-danger mt-3'>your wish List is emplty</h3>
                <Link to={'/'}>
                <button className='btn btn-success mt-3'><i class="fa-solid fa-arrow-left"></i> Back To Home</button>
                </Link>
                

              </div>
            </div>
        }


      </Row>
    </>
  )
}

export default Wishlist