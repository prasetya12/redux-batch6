
const initialState = {
    counter: 0,

    isLoading: false,
    data: [],
    isError: false
}

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DECREASE":
            return {
                ...state,
                counter: state.counter - 1
            }

        case "GET_PRODUCT_REQUEST":
            return {
                ...state,
                isLoading: true,
                data: [],
                isError: false
            }
        case "GET_PRODUCT_SUCCESS":
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                isError: false
            }
        case "GET_PRODUCT_ERROR":
            return {
                ...state,
                isLoading: false,
                data: [],
                isError: true
            }

        default:
            return state
    }
}

export default productReducers