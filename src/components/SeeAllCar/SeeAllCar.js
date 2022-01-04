import {Row, Col} from 'react-bootstrap'
import styled from './SeeAllCar.module.scss'
import CarImgMini from './Slider/CarImgMini'
import CarContent from './Slider/CarContent'
import CarActive from './Slider/CarActive'
import CarItem from './Slider/CarItem'
import arrowdown from "../../assets/img/UI/arrowdown.png"
import { useStore } from '../Store'
import { useState} from 'react'

export default function SeeAllCar() {
    const [state] = useStore()
    const init = state.cars && state.cars[0]
    const [imgActive, setImgActive] = useState(init)
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
        <div className={styled.container}>
            <div className={styled.containerHeader}>
                <Row>
                    <Col sm={3}>
                        <div className={styled.textHeader}>v8-SuperCar</div>
                    </Col>
                    <Col sm={9}>
                        <ul className={styled.categoryHeader}>
                            <li>SuperCar</li>
                            <li>HyperCar</li>
                            <li>MegaCar</li>
                            <li>LuxuryCar</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className={styled.containerContent}>
                <Row>
                    <Col sm={9} className="g-0">
                        <div className={styled.content}>
                            <Row sm={10} className="g-0 d-flex w-100">
                                <CarContent imgActive={imgActive} car={state.cars && state.cars[0]} />
                            </Row>
                            <Row sm={2} className="g-0 d-flex w-100">
                                <CarImgMini imgActive={imgActive} car={state.cars && state.cars[0]}/>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={3} className="g-0">
                        <div className={styled.seriesSlider}>
                            <Row sm={10} className="g-0 d-flex w-100">
                                <ul className={styled.carNameList}>
                                    <CarActive imgActive={imgActive} car={state.cars && state.cars[0]}/>
                                    {state.cars?.map((car, index) => (
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
                                <div className={styled.buttonSeries} >
                                    <img src={arrowdown} className={styled.seriesBtn} alt="nextBtn" />
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}