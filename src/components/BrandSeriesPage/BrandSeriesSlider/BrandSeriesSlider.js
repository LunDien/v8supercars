import { useStore } from '../../Store'
import clsx from 'clsx'
import styled from './BrandSeriesSlider.module.scss'
import { Carousel } from "react-bootstrap";


export default function BrandSeriesSlider() {
    const [state] = useStore() 
    const classImg = clsx(styled.sliderImg)
    return (
        <Carousel fade pause={false}>
            {state.cars?.map((car, index) => (
                car.brand.toLowerCase().split('-').join('') === state.brand &&  car.series.toLowerCase() === state.series.split('-')[1] &&       
                <Carousel.Item key={index} className={styled.slider}>
                <img
                className={classImg}
                src={`https://v8supercars-data.herokuapp.com/${car.imageURL[0]}`}
                alt={`slider ${state.brand} ${index}`}
                />
                <Carousel.Caption>
                <h3>{car.name}</h3>
                <p>{`${car.topSpeed} ${car.increaseSpeed}`}</p>
                </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}