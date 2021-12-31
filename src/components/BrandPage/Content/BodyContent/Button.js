import styled from '../ContentBrand.module.scss'
import arrowRight from '../../../../assets/img/UI/arrow-right.svg'
import arrowRightFill from '../../../../assets/img/UI/arrow-right-fill.svg'
import hexagon from '../../../../assets/img/UI/hexagon.svg'
import hexagonFill from '../../../../assets/img/UI/hexagon-fill.svg'


export default function Button({arrow}) {

    const handleLeaveBtn = e => {
        e.target.src = hexagon
    }

    const handleHoverBtn = (e) => {
        e.target.classList.add('animate__fadeIn')
        setTimeout(() => {
            e.target.classList.remove('animate__fadeIn')
        }, 200)
        
        const Btn = document.querySelectorAll(`.${styled.Btn}`)
        switch(e.target) {
            case Btn[0]: {
                const modal = document.querySelector(`.${styled.overlayLeft}`)
                e.target.src = arrowRightFill
                modal.style.display = "flex"
            }
                break;
            case Btn[1]: {
                const modal = document.querySelectorAll(`.${styled.overlayLeft}`)[1]
                e.target.src = arrowRightFill
                modal.style.display = "flex"
            }
                break;
            case Btn[2]:
            case Btn[3]:
                e.target.src = hexagonFill
                break;
            default: return
        }
            
    }
    return (
        <img 
        alt="contentImg" 
        src={arrow ? arrowRight : hexagon} 
        onMouseEnter={handleHoverBtn}
        onMouseLeave={arrow ? () => {} : handleLeaveBtn} 
        className={`${styled.Btn} animate__animated animate__faster`}
        />
    )
}