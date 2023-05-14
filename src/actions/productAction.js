import axios from "axios"

export const increaseCounterAction = () => (
    {
        type: 'INCREASE'
    }
)

export const decreaseCounterAction = () => (
    {
        type: 'DECREASE'
    }
)

//CALL API

//REQUEST
export const getProductRequest = () => (
    {
        type: 'GET_PRODUCT_REQUEST'
    }
)

//SUCCESS
export const getProductSuccess = (data) => (
    {
        type: 'GET_PRODUCT_SUCCESS',
        payload: data
    }
)


//ERROR
export const getProductError = () => (
    {
        type: 'GET_PRODUCT_ERROR'
    }
)


export const fetchDataProduct = () => {
    return (dispatch) => {
        dispatch(getProductRequest())
        axios.get('https://643a4e09bd3623f1b9b09e50.mockapi.io/products')
            .then((res) => {
                dispatch(getProductSuccess(res))

            }).catch((err) => {
                dispatch(getProductError())
            })
    }
}

