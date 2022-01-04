import { useStore } from '../../Store'
import styled from './BrandSeriesSlider.module.scss'
import CarActive from './CarActive'
import CarContent from './CarContent'
import CarImgMini from './CarImgMini'
import CarItem from './CarItem'
import { useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import arrowdown from "../../../assets/img/UI/arrowdown.png"



export default function BrandSeriesSlider() {
    const [state] = useStore() 
    const [carSeries, setCarSeries] = useState([])
    const [imgActive, setImgActive] = useState()

    useEffect(() => {
        setCarSeries([])
        setImgActive(null)
        state.cars?.map(car => (
            car.series.toLowerCase().split(' ').join('') === state.series.split('-')[1] && setCarSeries(oldCar => [...oldCar, car])

        ))}, [state.series])
    const handleClickItem = (e, item) => {
        e.stopPropagation()
        const carList = document.querySelector(`.${styled.carNameList}`)
        carList.scrollTop = 0
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        setImgActive(item)
    }
    return (
        <div className={styled.containerContent}>
            <Row>
                <Col sm={9} className="g-0">
                    <div className={styled.content}>
                        <Row sm={10} className="g-0 d-flex w-100">
                            <CarContent imgActive={imgActive} car={carSeries && carSeries[0]} />
                        </Row>
                        <Row sm={2} className="g-0 d-flex w-100">
                            <CarImgMini imgActive={imgActive} car={carSeries && carSeries[0]}/>
                        </Row>
                    </div>
                </Col>
                <Col sm={3} className="g-0">
                    <div className={styled.seriesSlider}>
                        <Row sm={10} className="g-0 d-flex w-100">
                            <ul className={styled.carNameList}>
                                <CarActive imgActive={imgActive} car={carSeries && carSeries[0]}/>
                                { carSeries && carSeries.map((car, index) => (
                                    (imgActive || index > 0) && 
                                    <CarItem 
                                    key={car._id} 
                                    OnClickItem={handleClickItem} 
                                    imgActive={imgActive && (imgActive._id === car._id && imgActive) } 
                                    car={car} 
                                    /> 
                                ))}
                            </ul>
                        </Row>
                        <Row sm={2} className="g-0 d-flex w-100">   
                            {carSeries.length > 4 && (
                                <div className={styled.buttonSeries} >
                                    <img src={arrowdown} className={styled.seriesBtn} alt="nextBtn" />
                                </div>
                            )}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}