import { useReducer, useEffect} from 'react'
import Context from './Context'
import reducer from './reducer'
import {initState} from './reducer'
import {setCarsData, setVideosData, setBrand, setBrandsData} from './actions'
import axios from 'axios'



function Provider({ children }) {    
    const [state, dispatch] = useReducer(reducer, initState)
    useEffect(() => {
        async function getLocation() {
            dispatch(setBrand(window.location.pathname.slice(1)))
        }
        getLocation()
        async function fetchCarsData() {
            axios.get("https://v8supercars-data.herokuapp.com/getcars")
                    .then(res => res.data)
                    .then(res => dispatch(setCarsData(res)))
        }
        fetchCarsData()
        async function fetchVideosData() {
            axios.get("https://v8supercars-data.herokuapp.com/getvideos")
                    .then(res => res.data)
                    .then(res => dispatch(setVideosData(res)))
        }
        fetchVideosData()
        async function fetchBrandsData() {
            axios.get("https://v8supercars-data.herokuapp.com/getbrands")
                    .then(res => res.data)
                    .then(res => dispatch(setBrandsData(res)))
        }
        fetchBrandsData()
    }, [])    

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider