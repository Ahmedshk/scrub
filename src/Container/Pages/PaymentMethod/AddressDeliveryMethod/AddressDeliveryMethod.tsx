import React from 'react'
import './AddressDeliveryMethod.scss'
import { Form } from 'react-bootstrap'

const AddressDeliveryMethod = () => {
  return (
    <div >
      <div className='Address_delivery_container'>
        <h6>Address Delivery</h6>
        <p>Beatrice Waddle 1391 Single Street,Chicago,MA 02142
          USA +5 781-644-3627
        </p>
        <p>BeatriceWaddle@rhyta.com</p>
        <button className='shopping'>CHANGE ADDRESS</button>
        <div className='total_cost'>
          <div>
            <span>Total Cost</span>
          </div>
          <div>
            <span>
              <b>$154.90</b>
            </span>
          </div>
        </div>

        <div className='gift_coupons_container'>
          <Form.Group className="mb-3">
            <label>Enter E-gift</label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <label>Enter Coupons</label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
        </div>

        <div className='total_cost'>
          <div>
            <span>Discount</span>
          </div>
          <div>
            <span>
              <b>$134.90</b>
            </span>
          </div>
        </div>


      </div>
      <div className='btns_container'>
        <div>
          <button className='shopping'>CONTINUE SHOPPING</button>
        </div>

        <div>
          <button className='proceed_step'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}
export default AddressDeliveryMethod