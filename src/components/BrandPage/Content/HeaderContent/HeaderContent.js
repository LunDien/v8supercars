import { useStore } from '../../../Store'
import styled from '../ContentBrand.module.scss'

export default function HeaderContent() {
    const [state] = useStore()

    return (
        <>
            {state.brands?.map((brand, index) => brand.brand.toLowerCase().split('-').join('') === state.brand && (
                <div key={index} className={styled.header}>
                    <div className={styled.headerLogo}>
                    <img alt="contentImg" className={styled.logo} src={"http://localhost:9000/" + brand.bigLogoURL} />
                    </div>
                    <div className={styled.headerContent}>
                        {brand.description.split('\\nn').map((string, index) => string.split('\\n').length > 1
                        ? string.split('\n').map((string2, index2) => <span key={index2} align="left" className="d-block w-100">{string2}</span>)
                        : <p key={index} align="left">{string}</p>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}