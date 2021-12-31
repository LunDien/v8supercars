import HeaderContent from './HeaderContent/HeaderContent'
import ContainerContent from './BodyContent/ContainerContent'
import styled from './ContentBrand.module.scss'
import { memo } from 'react'



function ContentBrand() {
    return (
        <div className={styled.container}>
            <HeaderContent />
            <ContainerContent />
        </div>
    )
}

export default memo(ContentBrand)
