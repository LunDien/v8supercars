import {Row, Col} from 'react-bootstrap'
import styled from './SeeAllCar.module.scss'
import lamborghini1 from "../../assets/img/slider/lamborghini1.jpeg"
import Slider from './Slider/Slider'


export default function SeeAllCar() {
    return (
        <div className={styled.container}>
            <div className={styled.header}>
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
            <Row>
                <Col sm={2}>
                    <ul >
                        <li>Lamborghini</li>
                        <li>Ferrari</li>
                        <li>McLaren</li>
                        <li>Audi</li>
                    </ul>
                </Col>
                <Col sm={8}>
                    <div className={styled.content}>
                        <img src={lamborghini1} className="d-block w-100" alt="lamborghini"/>
                        <ul className={styled.config}>
                            <li>
                                <p className={styled.field}>Top Speed</p>
                                <p className={styled.value}>300km/h</p>
                            </li>
                            <li>
                                <p className={styled.field}>Increase Speed</p>
                                <p className={styled.value}>2.9seconds</p>
                            </li>
                            <li>
                                <p className={styled.field}>Price</p>
                                <p className={styled.value}>4.000.000</p>
                            </li>
                        </ul>
                        <Slider />
                    </div>
                </Col>
                <Col sm={3}>

                </Col>
            </Row>
            
        </div>
    )
}