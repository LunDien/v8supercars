import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, Col, Button } from 'react-bootstrap'
import clsx from 'clsx'

import HeaderSubNavbar from './HeaderSubNavbar'
import styled from './Navbar.module.scss'
import logoshop from '../../assets/img/logo/logo.png'
import viewall from '../../assets/img/logo/arrow-right.png'
import { useStore, actions } from '../Store'


function HeaderNavbar() {
    const classNavItem = clsx(styled.navItem, 'flex-col')
    const classNavList = clsx(styled.navList, "d-flex", "justify-content-center")
    const [state, dispatch] = useStore()
    const handleClick = (e) => {
        if(e.target.name === 'viewall') {
            dispatch(actions.setBrand(''))
        }
        else if(e.target.nodeName === 'IMG') {
            dispatch(actions.setBrand(e.target.parentElement.innerText.toLowerCase().split('-').join('')))
        }
        else {
            dispatch(actions.setBrand(e.target.innerText.toLowerCase().split('-').join('')))
        }
    }
    
    return (
        <>
        <Navbar bg="dark" variant="dark" className={styled.navbar}>
            <Col sm={10}>
                <Container className={classNavList} >
                    <Nav >
                        <Nav.Link className={classNavItem} href="/">
                            <img src={logoshop} alt="logoshop" className={styled.logoshop} />
                        </Nav.Link> 
                        {state.brands?.map((brand, index) => (
                            <Link key={index} className={classNavItem} to={'/' + brand.brand.toLowerCase().split('-').join('')} onClick={handleClick}>
                            <img src={"https://v8supercars-data.herokuapp.com/" + brand.logoURL} alt={brand.brand} className={styled.logo} />
                            {brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}
                            </Link>
                        ))}
                        <Link className={classNavItem} to={'/viewall'}>
                        <img src={viewall} alt="viewall" name="viewall" onClick={handleClick} className={styled.logo} />
                        View All
                        </Link>
                    </Nav>
                </Container>
            </Col>
            <Col sm={2}>
                <Container className="d-flex text-white justify-content-end align-items-center">
                    <Button variant="dark" className="btn-custom">Sign in</Button>
                    <span>|</span>
                    <Button variant="dark" className="btn-custom">Sign up</Button>
                </Container>
            </Col>
        </Navbar>
        <HeaderSubNavbar/>
        </>
    )
}

export default HeaderNavbar