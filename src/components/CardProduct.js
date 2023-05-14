import { useEffect, useState } from 'react'
import Product1 from '../assets/image/product1.webp'

import { increaseCounterAction, decreaseCounterAction } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

function CardProduct({ namaProduct, price }) {
    const dispatch = useDispatch()
    const { counter } = useSelector((state) => state.product)
    // const [counter, setCounter] = useState(0)


    const decreaseCounterBtn = () => {
        dispatch(decreaseCounterAction())
        // setCounter(counter - 1)

    }

    const increaseCounterBtn = () => {
        dispatch(increaseCounterAction())
        // setCounter(counter + 1)
    }

    return (
        <>
            <div className='p-10 border w-80'>
                <img className="h-60" src={Product1} />
                <div className='mt-10'>
                    {namaProduct}
                </div>
                <div className='flex justify-between items-center mt-10'>
                    <button class="h-10 w-10 bg-blue-400 text-white" onClick={decreaseCounterBtn}>-</button>
                    <div>
                        {counter}
                    </div>
                    <button class="h-10 w-10 bg-blue-400 text-white" onClick={increaseCounterBtn}>+</button>

                </div>
                <div className='mt-5'>
                    ${price}
                </div>
            </div>

        </>
    )
}

export default CardProduct
