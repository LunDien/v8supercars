import leftcar from '../../../assets/img/UI/leftcar.png'
import rightcar1 from '../../../assets/img/UI/rightcar1.png'
import wheel from '../../../assets/img/UI/wheel4.png'
import styled from './Slider.module.scss'

export default function ModalSlider() {
    
    return (
        <div className={styled.modalList} >
            <div className={styled.modalItem}>
                <img src={leftcar} alt="car" className={styled.carLeft1} />
                <img src={wheel} alt="car" className={styled.wheelFrontLeft} />
                <img src={wheel} alt="car" className={styled.wheelBackLeft} />
                <p className={styled.sliderCaption} >V8-SuperCars</p>
            </div>
            <div className={styled.modalItem}>
                <img src={rightcar1} alt="car" className={styled.carRight1} />
                <img src={wheel} alt="car" className={styled.wheelFrontRight} />
                <img src={wheel} alt="car" className={styled.wheelBackRight} />
                <p className={styled.sliderSubCaption} >Passion No Far</p>
            </div>
        </div>
    )
}