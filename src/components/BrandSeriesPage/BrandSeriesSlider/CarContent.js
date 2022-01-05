import styled from './BrandSeriesSlider.module.scss'
import { useState, useEffect } from 'react'



function CarContent({ car, imgActive}) {
    const [item, setItem] = useState()

    useEffect(() => {
        imgActive ? setItem(imgActive) : setItem(car)
    }, [])
    return (
        <>
            {item && (
                <>
                    <img src={`https://v8supercars-data.herokuapp.com/${item.imageURL[0]}`} className={styled.fullImg} alt="fullImg"/>
                    <ul className={styled.config}>
                        <li>
                            <p className={styled.field}>Top Speed</p>
                            <p className={styled.value}>{item.topSpeed}</p>
                        </li>
                        <li>
                            <p className={styled.field}>Increase Speed</p>
                            <p className={styled.value}>{item.increaseSpeed}</p>
                        </li>
                        <li>
                            <p className={styled.field}>Price</p>
                            <p className={styled.value}>{item.price}</p>
                        </li>
                    </ul>
                </>
            )}
        </>
    )
}

export default CarContent
