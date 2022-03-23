import React from 'react';
import {Container} from 'react-bootstrap';
import BlackColor from "../../../../assets/img/blackColor.png";
import PewterColor from "../../../../assets/img/PewterColor.png";
import NavyColor from "../../../../assets/img/navyColor.png";
import RoyalColor from "../../../../assets/img/RoyalColor.png";
import CeilColor from "../../../../assets/img/CeilColor.png";
import WineColor from "../../../../assets/img/WineColor.png";
import Caribbean from "../../../../assets/img/Caribbean.png";
import Hunter from "../../../../assets/img/Hunter.png";
import Prints from "../../../../assets/img/Prints.png";
import "./ProductColors.scss";

const ProductColors = () => {
    const colors = [
        {
            img: BlackColor,
            name: 'Black'
        },
        {
            img: NavyColor,
            name: 'navy'
        },
        {
            img: PewterColor,
            name: 'Pewter'
        },
        {
            img: RoyalColor,
            name: 'Royal'
        },
        {
            img: CeilColor,
            name: 'Ceil'
        },
        {
            img: WineColor,
            name: 'Wine'
        },
        {
            img: Caribbean,
            name: 'Caribbean'
        },
        {
            img: Hunter,
            name: 'Hunter'
        },
        {
            img: Prints,
            name: 'Prints'
        },
    ]
    return (
        <Container className="shop_container">
            <h3 className={'text-center'}> SHOP BY COLOR </h3>
            <div className='d-flex justify-content-center align-items-center inner_container'>
                {
                    colors.map((color, index) => (
                        <div className='Colors text-center mt-4 mx-4'>
                            <img src={color.img} alt={color.name} width={50} height={50}/>
                            <p className='mt-3'>{color.name}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};
export default ProductColors;