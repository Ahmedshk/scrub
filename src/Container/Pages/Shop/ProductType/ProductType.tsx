import React, { useState } from 'react'


const ProductType = () => {
  const [toggle, setToggle] = useState('')

  const colorChange = (data:string) => {
    setToggle(data)
  }

  console.log(toggle)


  return (
    <React.Fragment>
      <div className='Product_type_container'>
        <h5>Product Type</h5>
        <div className='mt-4'>
          <input type='checkbox' />
          <span>T-Shirts</span>
          <span className='total'>(49)</span>
        </div>
        <div>
          <input type='checkbox' />
          <span>Sweatshirts</span>
          <span className='total'>(53)</span>
        </div>
        <div>
          <input type='checkbox' />
          <span>Baby</span>
          <span className='total'>(63)</span>
        </div>
        <div>
          <input type='checkbox' />
          <span>Dress shirts</span>
          <span className='total'>(43)</span>
        </div>
      </div>

      <div className='size_container'>
        <h5>SIZE</h5>
        <div className='button_container'>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>
      </div>

      <div className='size_container'>
        <h5>COLORS</h5>
        <div className='button_container'>
          <div className={toggle === "black" ? "active_border" : ""} style={{ backgroundColor: "#000", width: "25px", height: "25px" }} onClick={()=>colorChange("black")}></div>
          <div className={toggle === "brown" ? "active_border" : ""} style={{ backgroundColor: "#964B00", width: "25px", height: "25px" }} onClick={()=>colorChange("brown")}></div>
          <div className={toggle === "cream" ? "active_border" : ""} style={{ backgroundColor: "#F1E5AC", width: "25px", height: "25px" }} onClick={()=>colorChange("cream")}></div>
          <div className={toggle === "grey" ? "active_border" : ""}   style={{ backgroundColor: "#808080", width: "25px", height: "25px" }} onClick={()=>colorChange("grey")}></div>
          <div className={toggle === "purple" ? "active_border" : ""}  style={{ backgroundColor: "purple", width: "25px", height: "25px" }} onClick={()=>colorChange("purple")}></div>
          <div className={toggle === "blue" ? "active_border" : ""}  style={{ backgroundColor: "#2E2EFF", width: "25px", height: "25px" }} onClick={()=>colorChange("blue")}></div>
        </div>
      </div>


    </React.Fragment>
  )
}

export default ProductType
