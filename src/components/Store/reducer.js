import { SET_BRAND, SET_CARS_DATA, SET_BRANDS_DATA, SET_VIDEOS_DATA, SET_SERIES } from "./constants"


export const initState = {
    brand: '',
    series: '',
}

export default function reducer(state, action) {
    switch(action.type) {
        case SET_BRAND: 
            return {
                ...state,
                brand: action.payload
            }
        case SET_CARS_DATA:
            return {
                ...state,
                cars: action.payload
            }
        case SET_VIDEOS_DATA:
            return {
                ...state,
                videos: action.payload
            }
        case SET_SERIES:
            return {
                ...state,
                series: action.payload
            }
        case SET_BRANDS_DATA:
            return {
                ...state,
                brands: action.payload
            }
        default:
            throw new Error("Invalid action")
    }
}