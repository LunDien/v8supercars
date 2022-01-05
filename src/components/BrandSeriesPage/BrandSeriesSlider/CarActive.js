import styled from './BrandSeriesSlider.module.scss'
import { useState, useEffect } from 'react'

function CarActive({car, imgActive}) {
    const [item, setItem] = useState()
    useEffect(() => {
        imgActive ? setItem(imgActive) : setItem(car)
    }, [])
    
    return (
        <>
            {item && (
                <li className={styled.seriesActive} key={item.id}>
                    <div className={styled.seriesContent}>
                        <img src={`https://v8supercars-data.herokuapp.com/${item.imageURL[0]}`}  className={styled.imageSeries} alt="seriesImg"/>
                        <p className={styled.carName}>{item.name}</p>
                    </div>
                </li>
            )}
        </>
    )
}

export default CarActive