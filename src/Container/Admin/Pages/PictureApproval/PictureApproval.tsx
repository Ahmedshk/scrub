import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import './PictureApproval.scss'
import cardImage1 from '../../../../assets/img/offer_gift.png'
import cardImage2 from '../../../../assets/img/offer_gift.png'
import cardImage3 from '../../../../assets/img/offer_gift.png'
import cardImage5 from '../../../../assets/img/offer_gift.png'

const PictureApproval = () => {
    const [approvalData, setApprovalData] = useState<any>([
        {
            id: 1,
            img: cardImage1,
            isChecked: false,
        },
        {
            id: 2,
            img: cardImage2,
            isChecked: false,
        },
        {
            id: 3,
            img: cardImage3,
            isChecked: false,
        },
        {
            id: 4,
            img: cardImage5,
            isChecked: false,
        },
        {
            id: 5,
            img: cardImage1,
            isChecked: false,
        },
        {
            id: 6,
            img: cardImage2,
            isChecked: false,
        },
        {
            id: 7,
            img: cardImage3,
            isChecked: false,
        },
        {
            id: 8,
            img: cardImage5,
            isChecked: false,
        },
        {
            id: 9,
            img: cardImage3,
            isChecked: false,
        },
        {
            id: 10,
            img: cardImage5,
            isChecked: false,
        },

    ])

    const onChangeHandler = (data: any) => {
        setApprovalData(
            approvalData.map((dd: any) => {
                if (dd.id === data.id) {
                    return { ...dd, isChecked: !dd.isChecked }
                }
                else {
                    return dd;
                }
            })
        )
    }

    const download = (data: any) => {
        fetch(data.img, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${data.img}`); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    console.log(approvalData)

    return (
        <div className="page_responsive">
            <h3>Picture Approval</h3>
            <Container>
                <Row>
                    <Col md={12} className="picture_container">
                        <div className='picture_approval'>
                            {approvalData.map((data: any) => {
                                return (
                                    <div key={data.id} className="mb-3">
                                        <Card>
                                            <input type="checkbox" checked={data.isChecked ? true : false} onChange={() => onChangeHandler(data)} />
                                            <Card.Img className="img-fluid" variant="top" onClick={() => download(data)} src={data.img} />
                                        </Card>
                                    </div>
                                )
                            })}

                        </div>
                        <div className='approve_deny_container'>
                            <div>
                                <Button className='all_btns' onClick={() => download}>Download</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PictureApproval