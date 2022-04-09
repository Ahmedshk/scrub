import React,{useState} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import { allProductData } from "../../../../hooks/admin";
import { AiOutlineHeart } from 'react-icons/ai';
import './Product.scss';
import Pagination from '../../../../Components/Pagination/Pagination';
import {useNavigate} from 'react-router-dom'

const Product = () => {
    const [page,setPage] = useState(0)
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='picture_container'>
                            {allProductData.map((data: any) => {
                                return (
                                    <div key={data.id} className="mb-3 cursor_pointer">
                                        <Card>
                                            <Card.Img variant="top" src={data.img} />
                                            <div className='addToCard_container'>
                                                <div className='add_to_cart'>
                                                    <BsCart />
                                                </div>
                                                <div className='heart_container'>
                                                    <AiOutlineHeart />
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <Card.Title>
                                                    {data.cardTitle}
                                                </Card.Title>

                                                <Card.Text>
                                                    {data.cardText}
                                                </Card.Text>
                                                <div className='text-center'>
                                                    <button onClick={()=>navigate("/shop-description")}>Add To Cart</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })}

                        </div>
                        <Pagination page={page} totalPage={10} setPage={setPage}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Product

