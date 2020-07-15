import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg" alt="" />
                {basket?.length === 0 ? (
                    <div className="checkout__title">
                        <h2>Your basket is empty</h2>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>

                            {/* list all checkout product  */}
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />

                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkbox__right">
                    <h1>Subtotal:</h1>
                    <Subtotal />
                </div>
            )}
        </div>

    )
}

export default Checkout
