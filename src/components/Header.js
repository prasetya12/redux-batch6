import { BsBasket2 } from 'react-icons/bs';

import { useSelector } from 'react-redux';
function Header() {

    const data = useSelector((state) => state.product)


    return (
        <>
            <div className="flex h-14 bg-slate-300 px-5 justify-between items-center">
                <div>
                    Ecommerce
                </div>
                <div className='flex items-center'>
                    <BsBasket2></BsBasket2> {data.counter}
                </div>
            </div>
        </>
    )
}

export default Header