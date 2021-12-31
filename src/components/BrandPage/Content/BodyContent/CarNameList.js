import styled from '../ContentBrand.module.scss'
import { useStore } from '../../../Store'
import { Link } from 'react-router-dom'


export default function CarNameList({serie}) {
    const [state] = useStore()
    return (
        <ul className={styled.carName}>
            {state.cars?.map((car, index) => car.series.toLowerCase() === serie && (
                <li key={index}>
                    <Link to={"/" + state.brand + "-" + serie.toLowerCase() + "/" + car.name.toLowerCase().split(' ')}>{car.name}</Link>
                </li>
            ))}
        </ul>
    )
}