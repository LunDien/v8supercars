import styled from '../SeeAllCar.module.scss'
import { useState, useEffect } from 'react'

function CarItem({ car, OnClickItem, imgActive }) {
    const [item, setItem] = useState(car)
    
    useEffect(() => {
        imgActive ? setItem('') : setItem(car)
    }, [imgActive])


    return (
        <>
            {item && (
                <li key={item.id}>
                    <div className={styled.seriesContent}>
                        <img onClick={e => {
                            OnClickItem(e, item)
                        }} src={`https://v8supercars-data.herokuapp.com/${item.imageURL[0]}`} className={styled.imageSeries} alt="seriesImg" />
                        <p className={styled.carName}>{item.name}</p>
                    </div>
                </li>
            )}
        </>
    )
}

export default CarItem