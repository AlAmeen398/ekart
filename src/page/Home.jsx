import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/wishList';
import { addtoCart } from '../redux/cartSlice';
function Home() {
  const allProducts = useFetch('https://fakestoreapi.com/products')
  console.log('All Products');
  console.log(allProducts);
  const dispatch = useDispatch()


  return (
    <>
      <Row className='m-5'>
        {
          allProducts.length > 0 ?
            allProducts.map(item => (
              <Col className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                      <p className='fw-bolder'> price &#x20B9; {item.price}</p>

                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={()=>dispatch(addToWishList(item))}><i class="fa-solid fa-heart" ></i></Button>
                      <Button variant="outline-success" onClick={()=>{dispatch(addtoCart(item))}}><i class="fa-solid fa-cart-shopping"></i></Button>
                    </div>

                  </Card.Body>
                </Card>
              </Col>
            )) : <p> No items found</p>
        }


      </Row>

    </>
  )
}

export default Home