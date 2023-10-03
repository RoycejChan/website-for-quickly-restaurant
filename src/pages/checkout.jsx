import React, {useState, useEffect, useRef} from "react";
import CheckoutConfirmation from "./checkoutConfirmation"; // Update the path as needed


export default function Checkout() {


// GET MENU ITEMS FROM LOCAL STORAGE THAT USER SELECTED 
const selectedItemsJSON = localStorage.getItem("selectedItems");

// Parse the JSON string back to an array
const selectedItems = JSON.parse(selectedItemsJSON);

//CASH OR CARD OPTION SELECTED
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");




                                                // SHOW/HIDE CARD DETAILS DEPENDING IF USER CHOOSES CASH OR CARD

    useEffect(() => {
        handlePaymentMethodChange(selectedPaymentMethod);
    }, [selectedPaymentMethod]);

    function handlePaymentMethodChange(method) {
        let userPayment = document.querySelector(".user-payment");
    
        if (method === "Card") {
            // If Card is selected, show the "user-payment" element
            if (userPayment) {
                userPayment.style.display = "block"; 
            }
        } else if (method === "Cash") {
            // If Cash is selected, hide the "user-payment" element
            if (userPayment) {
                userPayment.style.display = "none"; 
            }
        }
    }
    
                                                // CHANGE INPUT BORDER WHEN SELECTED
    const selectElement = document.getElementById('myDropdown');

    const changeSelectBorderStyle = () => {
        const selectElement = document.getElementById("myDropdown");
        if (selectElement) {
          // Add the border style directly to the element
          selectElement.style.border = "5px solid orange";
        }
      };


                                                // CHANGE TIP AMOUNT + change total;
const [tipAmount, setTipAmount] = useState(0);

useEffect(() => {
    changeTipAmount(tipAmount);
    calculateTotalCost();
}, [tipAmount]);

                                            //FUNCTION CALLED EVRYTIME TIP BUTTON CLICKED
function changeTipAmount(amount) {
    setTipAmount(amount);

  }

                                                    // Function to calculate the total cost


    function calculateSubtotal() {
        const subtotal = selectedItems.reduce((total, item) => total + item.price, 0).toFixed(2);
        return parseFloat(subtotal);
        }

  function calculateTotalCost() {
    const selectedItemsTotal = selectedItems.reduce((total, item) => total + item.price, 0);
    const deliveryCost = 3.0; // Example delivery cost
    const serviceFee = 1.0; // Example service fee
    const tip = (selectedItemsTotal + 1) * tipAmount;
    const taxRate = 0.0375; // Example tax rate (3.75%)
    const tax = selectedItemsTotal * taxRate;
    const discount = 0.0; // Example discount
    const subTotal = calculateSubtotal();
    const tipHTML = document.getElementById("tip-Amount");
    const subTotaltag = document.getElementById("sub-total-p");
    if (tipHTML) {
      tipHTML.textContent = `$${tip.toFixed(2)}`;
    }
    if (subTotaltag) {
        subTotaltag.textContent = `$${subTotal.toFixed(2)}`;
    }

    return (
      selectedItemsTotal +
      deliveryCost +
      serviceFee +
      tip + // Include the tip in the total cost
      tax -
      discount
      
    ).toFixed(2);

  }


// GET FORM DATA AND PASS IT THROUGH TO CHECKOUUT CONFIRMATION PAGE
 // Define state variables for form data and submission status
 const [formData, setFormData] = useState({});
 const [formSubmitted, setFormSubmitted] = useState(false);

  // Create refs for form inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the input values from refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;

    // Create an object with the collected data
    const dataToPass = {
      name,
      email,
      number,
    };

    // Update the formData state with the collected data
    setFormData(dataToPass);
    setFormSubmitted(true);
    console.log(dataToPass);
  };



    return (
            <div className="checkout-background">
                <form className="checkout-container" onSubmit={handleSubmit}>



{/* LEFT SIDE OVER VIEW  */}

                    <form action="#" className="checkout-order-details" data-aos="slide-right">
                            <div className="pickup-type">
                                    <h3>Order Type</h3>
                                    <p>Pick up <span className="reminder">ONLY</span></p>
                            </div>

{/* USER NAME INFO */}

                    <div className="user-info">
                                <div className="username-info">
                                        <label for="username" required>Your name</label>
                                        <input type="text"  name="name"   className="username-input" ref={nameRef} />
                                </div>
                                <div className="useremail-info">
                                        <label for="useremail" required>Email</label>
                                        <input type="email"  name="email"   className="useremail-input" ref={emailRef} />
                                </div>
                                <div className="usernumber-info">
                                        <label for="usernumber">Phone number</label>
                                        <input required type="number"  name="number"   className="usernumber-input"  ref={numberRef} 
                                        onInput={(e) => {
                                        e.target.value = e.target.value.slice(0, 14); 
                                        }}/>
                                </div>
                    </div> 

{/* PAYMENT && TIME  */}
                    <div className="checkout-form">
                        <div className="payment">
                                <h3>Payment</h3>
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="card"
                                        name="payment-method"
                                        value="Card"
                                        className="payment-radio"
                                        checked={selectedPaymentMethod === "Card"}
                                        onChange={() => setSelectedPaymentMethod("Card")}
                                    />
                                    <label htmlFor="card">Card</label>
                                </div>
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="cash"
                                        name="payment-method"
                                        value="Cash"
                                        className="payment-radio"
                                        checked={selectedPaymentMethod === "Cash"}
                                        onChange={() => setSelectedPaymentMethod("Cash")}
                                    />
                                    <label htmlFor="cash">Cash on pickup</label>
                                </div>
                            </div>

                                <div className="pickup-time">
                                    <div>
                                        <h3>When</h3>
                                        <select id="myDropdown" name="when" className="pickup-select" onClick={changeSelectBorderStyle}>
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
                            <div className="card-user-info">
                                    <input type="number" placeholder="CARD NUMBER" className="card-number" name="cardnumber"/>
                                    <input type="text" placeholder="CARDHOLDER NAME" className="card-holder-name" maxlength="50" name="cardname"/>
                            </div>
                            <span className="card-details">
                                <input type="number" placeholder="12" className="card-month" name="cardmonth" 
                                onInput={(e) => {
                                    e.target.value = e.target.value.slice(0, 2); // Limit to 3 characters
                                }}/>
                                <input type="number" placeholder="2028"className="card-year" name="cardyear"
                                onInput={(e) => {
                                    e.target.value = e.target.value.slice(0, 5); // Limit to 3 characters
                                }} />
                                <input type="number" placeholder="CVV" className="card-CVV" name="cardcvv"
                                onInput={(e) => {
                                    e.target.value = e.target.value.slice(0, 3); // Limit to 3 characters
                                }} />
                            </span>
                        </form>
                    </form>

    {/* RIGHT SIDE OVER VIEW  */}

                    <div className="checkout-overview-container"/* data-aos="slide-left"*/ >
                        <div className="checkout-overview-form">
                            <h1>Your order 😋</h1>
                            <hr />


                                <ul className="orders-list">
                                {selectedItems.map((item, index) => (
                                    <li className="order-item" key={index}>
                                    <div className="order-details">
                                        <p>{item.name}</p>
                                        <p>${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="addDelete-btns">
                                        <button type="button">-</button>
                                        <button type="button">+</button>
                                    </div>
                                    </li>
                                ))}
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
                  <p id="tip-Amount">$0</p>
                </div>
                <ul className="tip-btns">
                  <li>
                    <button
                      className="tip-button"
                      type="button"
                      onClick={() => changeTipAmount(.10)}
                    >
                      10%
                    </button>
                  </li>
                  <li>
                    <button
                      className="tip-button"
                      type="button"
                      onClick={() => changeTipAmount(.15)}
                    >
                      15%
                    </button>
                  </li>
                  <li>
                    <button
                      className="tip-button"
                      type="button"
                      onClick={() => changeTipAmount(.20)}
                    >
                      20%
                    </button>
                  </li>
                  <li>
                    <button className="tip-button" type="button">
                      Other
                    </button>
                  </li>
                </ul>
              </div>
              <div className="sub-total">
                <h3>Sub-total</h3>
                <p id="sub-total-p">${selectedItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
              </div>
              <div className="tax-total">
                <h3>Tax (3.75%)</h3>
                <p>${(selectedItems.reduce((total, item) => total + item.price, 0) * 0.0375).toFixed(2)}</p>
              </div>
              <div className="discount-total">
                <h3>Discount total</h3>
                <p>-$0.0</p>
              </div>
              <div className="coupon">
                <input type="text" placeholder="Enter Coupon or Gift Code here" />
                <button type="button">Apply</button>
              </div>
              <div className="total-cost">
                <h3>TOTAL</h3>
                <h2>${calculateTotalCost()}</h2>
                                    </div>
                            </div>
                    
                        </div>
                        <button className="proceed" type="submit">
                                Proceed to Checkout
                            </button>
                    </div>
                    
                </form>
                {formSubmitted && <CheckoutConfirmation formData={formData} />}
            </div>
        )
}