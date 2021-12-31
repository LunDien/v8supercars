import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Container, Nav, Navbar } from 'react-bootstrap'
import styled from './Navbar.module.scss'
import { useStore, actions } from '../Store'
import { useState, useEffect } from 'react'



function HeaderSubNavbar() {
    const classesItem = clsx(styled.navSubItem, 'flex-col')
    const [state, dispatch] = useStore()
    const [series, setSeries] = useState([])

    useEffect(() => {
        state.cars?.forEach(car => {
            if(car.brand.toLowerCase().split('-').join('') === state.brand && !series.includes(car.series.toLowerCase())) {
                setSeries(series => [...series, car.series.toLowerCase()])
            }
            else if(car.brand.toLowerCase().split('-').join('') !== state.brand && series.includes(car.series.toLowerCase())) {
                setSeries([])
            }
        })
    })

    const handleClick = (e) => {
        dispatch(actions.setSeries(`${state.brand}-${e.target.innerText.toLowerCase()}`))
    }
    return (
        <div className={clsx("animate__animated", "animate__slideInRight", {
            "hidden": !state.brand
        })}>
            <Navbar bg="light" variant="light" className={styled.navbarSub}>
                <Container className='flex-row'>
                    <Nav >
                        {series.length > 0 && Array.from(new Set(series)).map((serie, index) => {
                            return <Link key={index} onClick={handleClick} className={classesItem} to={`/${state.brand}-${serie}`}>{serie.charAt(0).toUpperCase() + serie.slice(1)}</Link>
                        })}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderSubNavbar