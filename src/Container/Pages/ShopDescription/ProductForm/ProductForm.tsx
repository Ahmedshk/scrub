import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './ProductForm.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const [value, setValue] = useState(0)
    const [toggle, setToggle] = useState('')
    const navigate = useNavigate()

    const changeColor = (data:string) => {
        setToggle(data)
    }

    const plus = () => {
        setValue(value + 1)
    }
    const minus = () => {
        setValue(value - 1)
    }
    return (
        <div className='form_container'>
            <h4>CLASSIC MENS SCRUB TOP</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente reprehenderit quas unde est animi, eveniet, amet delectus culpa nesciunt dolorum officia</p>
            <div className='price_container'>
                <div>
                    <span>$89.00</span>
                </div>
                <div className='mx-4'>
                    <p className='cutting_price'>$87.00</p>
                </div>
            </div>

            <div className='colors_container'>
                <p>Colors</p>
                <div className='button_container'>
                    <div className={toggle === "black" ? "active_border" : ""} style={{ backgroundColor: "#000", width: "25px", height: "25px" }} onClick={() => changeColor("black")}></div>
                    <div className={toggle === "brown" ? "active_border" : ""} style={{ backgroundColor: "#964B00", width: "25px", height: "25px" }} onClick={() => changeColor("brown")}></div>
                    <div className={toggle === "cream" ? "active_border" : ""} style={{ backgroundColor: "#F1E5AC", width: "25px", height: "25px" }} onClick={() => changeColor("cream")}></div>
                    <div className={toggle === "grey" ? "active_border" : ""} style={{ backgroundColor: "#808080", width: "25px", height: "25px" }} onClick={() => changeColor("grey")}></div>
                    <div className={toggle === "purple" ? "active_border" : ""} style={{ backgroundColor: "purple", width: "25px", height: "25px" }} onClick={() => changeColor("purple")}></div>
                    <div className={toggle === "blue" ? "active_border" : ""} style={{ backgroundColor: "#2E2EFF", width: "25px", height: "25px" }} onClick={() => changeColor("blue")}></div>
                </div>
            </div>

            <div className='mx-3'>
                <p>Size:</p>
                <div className='w-50'>
                    <Form.Select>
                        <option hidden value={""}>Please select</option>
                        <option value="XS">XS</option>
                        <option value="SM">SM</option>
                        <option value="LG">LG</option>
                    </Form.Select>
                </div>
            </div>
            <div className='quantity_container'>
                <p>Quantity:</p>
                <div className='quantity_inner_container'>
                    <div className='plus_minus_container'>
                        <div>
                            <button onClick={minus} className='minus_btn'>-</button>
                        </div>
                        <p className='mt-2'>{value}</p>
                        <div>
                            <button onClick={plus} className='plus_btn'>+</button>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <button className='btn' onClick={()=> navigate('/order-summary')}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className='heart'>
                        <AiOutlineHeart />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductForm