import {Row, Col} from 'react-bootstrap'

import styled from './Footer.module.scss'
import logo from '../../assets/img/logo/logo.png'
import clsx from 'clsx'


export default function Footer() {
    return (
        <footer className={styled.footer}>
            <Row>
                <Col>
                    <div className={styled.footer_shop}>
                        <a href="/" className={styled.footer_shop__logo}>
                            <img src={logo} alt="supercar-logo" className={styled.footer_shop__logo_img}/>
                        </a>
                    </div>
                </Col>

                <Col>
                    <ul className={styled.footer_list}>
                        <li className={styled.footer_item}>
                            <h4 className={styled.footer_item_heading}>Contact</h4>
                        </li>
                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                <i className={clsx("fas", "fa-phone-alt", styled.footer_item_icon)}></i>
                                0905945303
                            </a>
                        </li>

                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                <i className={clsx("far", "fa-envelope", styled.footer_item_icon)}></i>
                                kuhaudn@gmail.com
                            </a>
                        </li>

                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                <i className={clsx("fas", "fa-map-marker-alt", styled.footer_item_icon)}></i>
                                Cu Chinh Lan St, Da Nang
                            </a>
                        </li>
                    </ul>
                </Col>

                <Col>
                    <ul className={styled.footer_list}>
                        <li className={styled.footer_item}>
                            <h4 className={styled.footer_item_heading}>Service</h4>
                        </li>
                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                <i className={clsx("fas", "fa-car", styled.footer_item_icon)}></i>
                                Take Care Your Cars
                            </a>
                        </li>

                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                <i className={clsx("far", "fa-handshake", styled.footer_item_icon)}></i>
                                Cooperation
                            </a>
                        </li>

                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                <i className={clsx("fas", "fa-ad", styled.footer_item_icon)}></i>
                                Advertisement
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <ul className={styled.footer_list}>
                        <li className={styled.footer_item}>
                            <h4 className={styled.footer_item_heading}>License</h4>
                        </li>
                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                Privacy Policy
                            </a>
                        </li>

                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                Privacy
                            </a>
                        </li>

                        <li className={styled.footer_item}>
                            <a href="/" className={styled.footer_item_link}>
                                Term Of Use
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <span className={styled.footer_copyright}>© 2021 Copyright: v8supercas.com</span>
            </Row>
        </footer>
    )
}