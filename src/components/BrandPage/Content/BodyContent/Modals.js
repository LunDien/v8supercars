import styled from '../ContentBrand.module.scss'
import CarNameList from './CarNameList'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useStore } from '../../../Store'


export default function Modals({service}) {
    const [state] = useStore()
    const [series, setSeries] = useState([])
    const [serie, setSerie] = useState('')


    useEffect(() => {
        state.cars?.forEach(car => {
            if(car.brand.toLowerCase().split('-').join('') === state.brand && !series.includes(car.series.toLowerCase())) {
                setSeries(series => [...series, car.series.toLowerCase()])
            }
            else if(car.brand.toLowerCase().split('-').join('') !== state.brand && series.includes(car.series.toLowerCase())) {
                setSeries([])
            }
        })
    }, [state.brand])

    const handleHoverList = e => {
        e.stopPropagation()
        const carName = document.querySelector(`.${styled.carName}`)
        const linkModals = document.querySelectorAll(`.${styled.linkModal}`)
        for(const linkModal of linkModals) {
            if(linkModal !== e.target) {
                linkModal.style.opacity = "0.7"
                linkModal.style.textShadow = "none"
            }
        }
        e.target.style.opacity = "1"
        e.target.style.textShadow = "0px -2px 0px rgba(0,0,0,0.7), 0 0 8px rgba(255,255,255,1),0 0 8px rgba(255,255,255,1)"
        carName.style.display = "block"
        setSerie(e.target.innerText.toLowerCase())
    }
    return (
        <div className={styled.overlayLeft}>
            <div className={styled.modalContent}>
                <ul className={styled.modalList} >
                    {series.length > 0 && !service
                    ? (Array.from(new Set(series)).map((serie, index) => (
                        <li key={index}>
                            <Link onMouseEnter={handleHoverList} className={styled.linkModal} to={"/" + state.brand + "-" + serie.toLowerCase()}>{serie.charAt(0).toUpperCase() + serie.slice(1).toLowerCase()}</Link>
                        </li>
                    )))
                    : (
                        <>
                            <li>
                                <Link className={styled.linkModal} to="/repairs">Repairs</Link>
                            </li>
                            <li>
                                <Link className={styled.linkModal} to="/upgrade">Upgrade</Link>
                            </li>
                            <li>
                                <Link className={styled.linkModal} to="/carwash">Car Wash</Link>
                            </li>
                        </>
                    )}
                </ul>
                <CarNameList serie={serie}/>
            </div>
        </div>
    )
}