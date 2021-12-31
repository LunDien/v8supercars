import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import styled from './Content.module.scss'
import lykan from '../../../assets/img/slider/lykan-hypersport.jpeg'
import mclaren from '../../../assets/img/slider/mclaren-P1.jpeg'

export default function Content() {
    return (
        <>
            <Row>
                <Col className={styled.listContent}>
                    <h3 className={styled.heading}>About Us</h3>
                    <span className={styled.description}>
                        We are V8-SuperCars, showroom car is biggest in Vietnam. 
                        First of all, we come here with the mission to bring you unprecedented experiences. 
                        Just a few simple steps, you can experience our latest MegaCar, HyperCar and SuperCar. 
                        Next, this will be the first showroom in our series of showrooms that will be available in Vietnam soon. 
                        Please visit and rate your satisfaction about us. Thanks for visiting.
                    </span>
                </Col>
                <Col className={styled.listContent}>
                    <img
                    className="d-block w-100"
                    src={lykan}
                    alt="lykan-hypersport"
                    />
                </Col>
            </Row>
            <Row>
                <Col className={styled.listContent2}>
                    <img
                    className="d-block w-100"
                    src={mclaren}
                    alt="mclaren-P1"
                    />
                </Col>
                <Col className={styled.listContent2}>
                    <h3 className={styled.heading}>Exclusivity</h3>
                    <span className={styled.description}>
                    We are the first showroom representing many of the world's leading car manufacturers 
                    such as Lamborghini, Ferrari, Wmotor,... present in Vietnam. 
                    You will receive all genuine service packages right in Vietnam with a team of internationally licensed technicians. 
                    Your satisfaction is our motivation. Welcome to SuperCars World.
                    </span>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Link to="/viewall" className={styled.btn}>See All Car</Link>
            </Row>  
        
        </>

    )
}