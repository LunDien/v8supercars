import {Figure} from 'react-bootstrap'

import ModalSlider from './ModalSlider'
import road from '../../../assets/img/UI/road.jpeg'
import road1 from '../../../assets/img/UI/road.png'
import styled from './Slider.module.scss'

export default function Slider() {
    const colorContent = ['purple', 'navajowhite', 'fuchsia', 'burlywood', 'yellow', 'orange', 'blueviolet', 'springgreen', 'cyan', 'darkgoldenrod', 'mediumseagreen', 'lime', 'chocolate', 'red', 'blue', 'aqua', 'white', 'dodgerblue', 'lightgoldenrodyellow']
    const colorCap = ['mediumseagreen', 'lime', 'chocolate', 'red', 'blue', 'aqua', 'white', 'dodgerblue', 'lightgoldenrodyellow', 'purple', 'navajowhite', 'fuchsia', 'burlywood', 'yellow', 'orange', 'blanchedalmond', 'springgreen', 'cyan', 'darkgoldenrod']
    
    const handleSlider = () => {
        const content = document.querySelector(`.${styled.sliderCaption}`)
        const subContent = document.querySelector(`.${styled.sliderSubCaption}`)
        const modalList = document.querySelector(`.${styled.modalList}`)
        const index = Math.ceil(Math.random() * 19) - 1

        content.style.color = colorContent[index]
        subContent.style.color = colorCap[index]
        modalList.style.display = 'none'
        
        setTimeout(() => {
            modalList.style.display = 'flex'
        }, 500)

    }

    
    return (
        <Figure className={styled.Figure} onClick={handleSlider}>
            <div className={styled.slider}>
                <img src={road} className={styled.background} alt="road"/>
                <img src={road1} className={styled.background} alt="road"/>
                <img src={road} className={styled.background} alt="road"/>
            </div>
            <ModalSlider />
        </Figure>
    )
}