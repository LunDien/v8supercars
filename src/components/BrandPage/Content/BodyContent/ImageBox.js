import { useState, useEffect, memo } from 'react'
import { useStore } from '../../../Store'

import styled from '../ContentBrand.module.scss'
import Button from './Button'
import Modals from './Modals'
import arrowRight from '../../../../assets/img/UI/arrow-right.svg'

function ImageBox({mode}) {
    const [state] = useStore()
    const [image, setImage] = useState([])
    let index = 0
    let cssStyle = ''

    if(mode) {
        if(mode === "models") {
            index = 0
            cssStyle = styled.imageLeft
        }
        else if(mode === "service") {
            index = 1 
            cssStyle = styled.imageLeft2
        }
        else if(mode === "feedback") {
            index = 2
            cssStyle = styled.imageRight
        }
        else if(mode === "contact") {
            index = 3
            cssStyle = styled.imageRight2
        }
    }

    useEffect(() => {
        state.brands?.map(brand => brand.brand.toLowerCase().split('-').join('') === state.brand && setImage(brand.imageURL)
    )})

    const handleHideModal = () => {
        const modalLeft = document.querySelectorAll(`.${styled.overlayLeft}`)
        const carName = document.querySelectorAll(`.${styled.carName}`)
        const linkModals = document.querySelectorAll(`.${styled.linkModal}`)
        const buttons = document.querySelectorAll(`.${styled.Btn}`)

        for(var i = 0; i < buttons.length; i++) {
            i < 2 && (buttons[i].src = arrowRight)
        }
        for(const linkModal of linkModals) {
            linkModal.style.opacity = "0.7"
            linkModal.style.textShadow = "none"
        }
        for(const list of carName) {
            list.style.display = "none"
        }
        for(const modal of modalLeft) {
            modal.style.display = "none"
        }
    }


    return (
        <div className={styled.imageBox} onMouseLeave={handleHideModal}>
            <img 
            alt="contentImg" 
            className={cssStyle}
            src={(image.length > 1) ? ("http://localhost:9000/" + image[index]) : ''} 
            />
            <div className={styled[mode.toLowerCase()]}>
                <p>{mode.charAt(0).toUpperCase() + mode.slice(1)}</p>
                {(index === 0 || index === 1) ? <Button arrow/> : <Button />}
            </div>
            {index === 0 && <Modals />}
            {index === 1 && <Modals service/>}
        </div>
    )
}

export default memo(ImageBox)