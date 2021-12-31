import clsx from 'clsx'
import { Link } from 'react-router-dom'
import styled from './Slider.module.scss'

export default function ModalButton() {
    const btnClasses = clsx("animate__animated", "animate__fadeInUp", styled.btnList)

    return (
        <div className={styled.overlay} >
            <div className={btnClasses}>
                <div>
                    <Link to="/login" className={styled.btn}>
                        Sign in
                    </Link>
                    <Link to="/register" className={styled.btn}>
                        Sign up
                    </Link>
                </div>
                <div>
                    <Link to="/service" className={styled.btn}>
                        Service
                    </Link>
                    <Link to="/contact" className={styled.btn}>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}