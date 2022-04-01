import React from 'react'
import {Container, Col, Row, Card, Form} from 'react-bootstrap'
import cardImage1 from '../../../../assets/img/offer_gift.png'
import cardImage2 from '../../../../assets/img/offer_gift.png'
import cardImage3 from '../../../../assets/img/offer_gift.png'
import cardImage5 from '../../../../assets/img/offer_gift.png'
import './PictureApproval.scss'

const PictureApproval = () => {

    const approvalData = [
        {
            id: 1,
            img: cardImage1,
        },
        {
            id: 2,
            img: cardImage2,
        },
        {
            id: 3,
            img: cardImage3,
        },
        {
            id: 4,
            img: cardImage5,
        },
        {
            id: 5,
            img: cardImage1,
        },
        {
            id: 6,
            img: cardImage2,
        },
        {
            id: 7,
            img: cardImage3,
        },
        {
            id: 8,
            img: cardImage5,
        },
        {
            id: 9,
            img: cardImage3,
        },
        {
            id: 10,
            img: cardImage5,
        },
    ]

    const onChangeHandler = (data: any) => {
        console.log(data)
    }

    return (
        <div className="page_responsive">
            <h3>Picture Approval</h3>
            <Container>
                <Row>
                    <Col md={12} className="picture_container">
                        <div className='picture_approval'>
                            {
                                approvalData.map((data: any) => (
                                    <div key={`default-${data.id}`} className="mb-3">
                                        <Card>
                                            <Form.Check
                                                type='checkbox'
                                                id={`default-${data.id}`}
                                                onChange={() => onChangeHandler(data)}
                                            />
                                            <Card.Img className="img-fluid" variant="top" src={data.img} />
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='approve_deny_container'>
                            <div>
                                <button>Approve</button>
                            </div>
                            <div>
                                <button>Deny</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PictureApproval