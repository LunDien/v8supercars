import arrowleft from "../../../assets/img/UI/arrowleft.png"
import arrowright from "../../../assets/img/UI/arrowright.png"
import { useEffect, useState } from 'react'


import styled from './BrandSeriesSlider.module.scss'

function CarImgMini({ car, imgActive}) {
    const [item, setItem] = useState()


    useEffect(() => {
        imgActive ? setItem(imgActive) : setItem(car)
    }, [])

    useEffect(() => {
        const slider = document.querySelector(`.${styled.contentSlider}`)
        const buttons = document.querySelectorAll(`.${styled.button}`)
        slider?.firstChild?.classList.add(`${styled.active}`)
        if(slider?.childNodes?.length < 6) {
            slider.style.justifyContent = 'center'
            for(const button of buttons) {
                button.style.display = "none"
            }
        }
        else {
            slider && (slider.style.justifyContent = 'first baseline')
            for(const button of buttons) {
                button.style.display = "flex"
            }
        }
    })

    const handleClickItem = e => {
        const imgActive = document.querySelector(`.${styled.active}`)
        const fullImg = document.querySelector(`.${styled.fullImg}`)
        fullImg.src = e.target.src
        imgActive && imgActive.classList.remove(`${styled.active}`)
        e.target.closest('li').classList.add(`${styled.active}`)
    }

    const handlePrevBtn = e => {
        const slider = document.querySelector(`.${styled.contentSlider}`)
        slider.scrollLeft = slider.scrollLeft - (slider.offsetWidth * 0.4) - 40
    }

    const handleNextBtn = e => {
        const slider = document.querySelector(`.${styled.contentSlider}`)
        slider.scrollLeft = slider.scrollLeft + (slider.offsetWidth * 0.4) + 40

    }

    return (
        <>
        {item && (
            <div className={styled.slider}>
                <div className={styled.button} onClick={handlePrevBtn}>
                <img src={arrowleft} className={styled.sliderBtn} alt="prevBtn" />
                </div>
                <ul className={styled.contentSlider}>
                    {item.imageURL.map((url, index) => (
                        <li key={index} onClick={handleClickItem} className={index === 0 && styled.active}>
                            <img src={`https://v8supercars-data.herokuapp.com/${url}`} className="d-block w-100" alt="sliderImg" />
                        </li>
                    ))}
                    
                </ul>
                <div className={styled.button} onClick={handleNextBtn}>
                    <img src={arrowright} className={styled.sliderBtn} alt="nextBtn" />
                </div>
            </div>
        )}
        </>
    )
}

export default CarImgMini
