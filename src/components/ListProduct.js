import CardProduct from "./CardProduct"
import { fetchDataProduct } from "../actions/productAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function ListProduct() {
    const dispatch = useDispatch()
    const { isLoading, data } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchDataProduct())
    }, [])

    console.log(data.data)
    return (
        <>
            {isLoading ? (<div>Loading</div>) : (<></>)}
            <div className="mt-10">
                {
                    data?.data?.map((item, key) => (
                        <CardProduct
                            namaProduct={item.productName}
                            price={item.price} />
                    )


                    )
                }
            </div>
        </>
    )
}

export default ListProduct