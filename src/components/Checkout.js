import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Checkout({subtotal}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }
    return (
        <div>

            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Order Placed Successfully'/>)}
            
            <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51MdwQaSGXlT6QO6K40jYIsAgd80Rnk3w73OFlGUbFfsL0Dv3YKqO7UjaMRRjrg7jV0khjMpGRS7Watv9jiYh918v00HzBeUZ5g'
            currency='INR'
            >
                <button className='btn'>
                    Pay Now
                </button>
            </StripeCheckout>

        </div>
    )
}