import lamborghini1 from "../../../assets/img/slider/lamborghini1.jpeg"
import lamborghini2 from "../../../assets/img/slider/lamborghini2.jpeg"
import lamborghini3 from "../../../assets/img/slider/lamborghini3.jpeg"
import lamborghini4 from "../../../assets/img/slider/lamborghini4.jpeg"
import arrowleft from "../../../assets/img/UI/arrowleft.png"
import arrowright from "../../../assets/img/UI/arrowright.png"


import styled from '../SeeAllCar.module.scss'

function Slider() {

    const handleClickItem = e => {

    }

    return (
        <div className={styled.slider}>
            <div className={styled.button}>
                <img src={arrowleft} className={styled.sliderBtn} alt="prevBtn" />
            </div>
            <ul className={styled.contentSlider}>
                <li onClick={handleClickItem}>
                    <img src={lamborghini1} className="d-block w-100" alt="sliderImg" />
                </li>
                <li className={styled.active} >
                    <img src={lamborghini2} className="d-block w-100" alt="sliderImg" />
                </li>
                <li>
                    <img src={lamborghini3} className="d-block w-100" alt="sliderImg" />
                </li>
                <li>
                    <img src={lamborghini4} className="d-block w-100" alt="sliderImg" />
                </li>
                <li >
                    <img src={lamborghini4} className={`d-block w-100`} alt="sliderImg" />
                </li>
                <li>
                    <img src={lamborghini4} className="d-block w-100" alt="sliderImg" />
                </li>
                <li>
                    <img src={lamborghini4} className="d-block w-100" alt="sliderImg" />
                </li>
                <li>
                    <img src={lamborghini4} className="d-block w-100" alt="sliderImg" />
                </li>
                <li>
                    <img src={lamborghini4} className="d-block w-100" alt="sliderImg" />
                </li>
            </ul>
            <div className={styled.button}>
                <img src={arrowright} className={styled.sliderBtn} alt="nextBtn" />
            </div>
        </div>
    )
}

export default Slider
