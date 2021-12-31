import {SET_BRAND, SET_CARS_DATA, SET_VIDEOS_DATA, SET_BRANDS_DATA, SET_SERIES} from './constants'

export const setCarsData = payload => ({
    type: SET_CARS_DATA,
    payload
})

export const setBrand = payload => ({
    type: SET_BRAND,
    payload
})

export const setSeries = payload => ({
    type: SET_SERIES,
    payload
})

export const setVideosData = payload => ({
    type: SET_VIDEOS_DATA,
    payload
})

export const setBrandsData = payload => ({
    type: SET_BRANDS_DATA,
    payload
})