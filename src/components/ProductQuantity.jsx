import React, { useState } from "react";

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(1);

    const product = "Laptop";
    const price = 50000;

    const totalAmount = price * quantity;

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="container product-box">

            <h1 className="title"> Product Quantity Counter</h1>

            <div className="product-card">

                <h3>{product}</h3>

                <h4>Price : ₹{price.toLocaleString()}</h4>

                <div className="quantity-box">

                    <button
                        className=" quantity-btn"
                        onClick={decreaseQuantity}
                    >
                        −
                    </button>

                    <span className="quantity">{quantity}</span>

                    <button
                        className=" quantity-btn"
                        onClick={increaseQuantity}
                    >
                        +
                    </button>

                </div>

                <div className="total-box">
                    <h3>Total Amount</h3>
                    <h2>₹{totalAmount.toLocaleString()}</h2>
                </div>

            </div>

        </div>
    );
};

export default ProductQuantity;