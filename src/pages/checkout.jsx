import React from "react";
import {useLocation} from 'react-router-dom';


export default function Checkout() {

    const location = useLocation();


    const selectElement = document.getElementById('myDropdown');

    const changeSelectBorderStyle = () => {
        const selectElement = document.getElementById("myDropdown");
        if (selectElement) {
          // Add the border style directly to the element
          selectElement.style.border = "5px solid orange";
        }
      };

    return (
            <div className="checkout-background">
                <div className="checkout-container">
                    <p>{location.state}</p>



            {/* LEFT SIDE OVER VIEW  */}

                    <form action="#" className="checkout-order-details" data-aos="slide-right">
                            <div className="pickup-type">
                                    <h3>Order Type</h3>
                                    <p>Pick up <span className="reminder">ONLY</span></p>
                            </div>
                            
                    <div className="checkout-form">
                                <div className="payment">
                                        <h3>Payment</h3>
                                        <div className="payment-option">
                                            <input type="radio" id="card" name="payment-method" value="Card"  className="payment-radio"/>
                                            <label for="card">Card</label>
                                        </div>
                                        <div className="payment-option">
                                            <input type="radio" id="cash" name="payment-method" value="Cash" className="payment-radio"/>
                                            <label for="cash">Cash on pickup</label>
                                        </div>
                                </div>
                                <div className="pickup-time">
                                    <div>
                                        <h3>When</h3>
                                        <select id="myDropdown" name="myDropdown" className="pickup-select" onClick={changeSelectBorderStyle}>
                                            <option value="Default" className="pickup-option">Select a time</option>
                                            <option value="11:00 AM" className="pickup-option">11:00 AM</option>
                                            <option value="11:30 AM" className="pickup-option">11:30 AM</option>
                                            <option value="12:00 PM" className="pickup-option">12:00 PM</option>
                                            <option value="12:30 PM" className="pickup-option">12:30 PM</option>
                                            <option value="01:00 PM" className="pickup-option">01:00 PM</option>
                                            <option value="01:30 PM" className="pickup-option">01:30 PM</option>
                                            <option value="02:00 PM" className="pickup-option">02:00 PM</option>
                                            <option value="02:30 PM" className="pickup-option">02:30 PM</option>
                                            <option value="03:00 PM" className="pickup-option">03:00 PM</option>
                                            <option value="03:30 PM" className="pickup-option">03:30 PM</option>
                                            <option value="04:00 PM" className="pickup-option">04:00 PM</option>
                                            <option value="04:30 PM" className="pickup-option">04:30 PM</option>
                                            <option value="05:00 PM" className="pickup-option">05:00 PM</option>
                                            <option value="05:30 PM" className="pickup-option">05:30 PM</option>
                                            <option value="06:00 PM" className="pickup-option">06:00 PM</option>
                                            <option value="06:30 PM" className="pickup-option">06:30 PM</option>
                                            <option value="07:00 PM" className="pickup-option">07:00 PM</option>
                                            <option value="07:30 PM" className="pickup-option">07:30 PM</option>
                                            <option value="08:00 PM" className="pickup-option">08:00 PM</option>
                                            <option value="08:30 PM" className="pickup-option">08:30 PM</option>
                                            <option value="09:00 PM" className="pickup-option">09:00 PM</option>
                                            <option value="09:30 PM" className="pickup-option">09:30 PM</option>
                                            <option value="10:00 PM" className="pickup-option">10:00 PM</option>
                                            <option value="ASAP" className="pickup-option">As soon as possible</option>
                                        </select>                              
                                    </div>
                            </div> 
                    </div>

    {/* PAYMENT INFORMATION */}
                        <form action="#" className="user-payment">
                            <input type="number" placeholder="CARD NUMBER" className="card-number"/>
                            <input type="text" placeholder="CARDHOLDER NAME" className="card-holder-name" maxlength="50"/>
                            <span className="card-details">
                                <input type="number" placeholder="12" className="card-month" 
                                onInput={(e) => {
                                    e.target.value = e.target.value.slice(0, 2); // Limit to 3 characters
                                }}/>
                                <input type="number" placeholder="2028"className="card-year" 
                                onInput={(e) => {
                                    e.target.value = e.target.value.slice(0, 5); // Limit to 3 characters
                                }} />
                                <input type="number" placeholder="CVV" className="card-CVV" 
                                onInput={(e) => {
                                    e.target.value = e.target.value.slice(0, 3); // Limit to 3 characters
                                }} />
                            </span>
                        </form>
                    </form>

    {/* RIGHT SIDE OVER VIEW  */}

                    <div className="checkout-overview-container" data-aos="slide-down">
                        <div className="checkout-overview-form">
                            <h1>Your order 😋</h1>
                            <hr />

                            <ul className="orders-list">
                                <li className="order-item">
                                    <div className="order-details">
                                        <p>1x Double CheeseBurger</p>
                                        <p>$2.00</p>
                                    </div>
                                    <div className="addDelete-btns">
                                        <button>-</button>
                                        <button>+</button>
                                    </div>
                                </li>
                                <li className="order-item">
                                    <div className="order-details">
                                    <p>1x Your Face</p>
                                    <p>$2.00</p>
                                    </div>
                                    <div className="addDelete-btns">
                                    <button>-</button>
                                    <button>+</button>
                                    </div>
                                </li>
                                
                            </ul>

                            <hr />
                            
                            <div className="misc-cost">
                                    <div className="delivery-cost">
                                            <h3>Delivery</h3>
                                            <p>$3.00 - $6.00</p>
                                    </div>
                                    <div className="service-fee">
                                            <h3>Service Fee</h3>
                                            <p>$1.00</p>
                                    </div>
                                    <div className="tip-cost">
                                            <div className="tip-header">
                                                <h3>Tip</h3>
                                                <p>$0</p>
                                            </div>
                                        <ul className="tip-btns">
                                            <li>
                                                <button className="tip-button">
                                                    10%
                                                </button>
                                            </li>
                                            <li>
                                                <button className="tip-button">
                                                    15%
                                                </button>
                                            </li>
                                            <li>
                                                <button className="tip-button">
                                                    20%
                                                </button>
                                            </li>
                                            <li>
                                                <button className="tip-button">
                                                    Other
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sub-total">
                                        <h3>Sub-total</h3>
                                        <p>$9.90</p>
                                    </div>
                                    <div className="tax-total">
                                        <h3>Tax (3.75%) </h3>
                                        <p>$0.52</p>
                                    </div>
                                    <div className="discount-total">
                                        <h3>Discount total</h3>
                                        <p>-$0.0</p>
                                    </div>
                                    <div className="coupon">
                                        <input type="text" placeholder="Enter Coupon or Gift Code here"/>
                                        <button className="coupon-submit">Apply</button>
                                    </div>
                                    <div className="total-cost">
                                        <h3>TOTAL</h3>
                                        <h2>$10.42</h2>
                                    </div>
                            </div>
                    
                        </div>
                        <button className="proceed">
                                Proceed to Checkout
                            </button>
                    </div>
                    
                </div>
            </div>
        )
}