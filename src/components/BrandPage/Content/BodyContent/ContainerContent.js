import {memo} from 'react'
import {Row, Col} from 'react-bootstrap'
import ImageBox from './ImageBox'
import TextContent from './TextContent'
import styled from '../ContentBrand.module.scss'


function ContainerContent() {
        
    return (
        <div className={styled.content} >
            <Row>
                <Col sm={8}>
                    <ImageBox mode={"models"} />
                    <ImageBox mode={"service"} />
                </Col>
                <Col sm={4}>
                    <TextContent mode={"career"} />
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <TextContent mode={"address"} />
                </Col>
                <Col sm={8}>
                    <ImageBox mode={"feedback"} />
                    <ImageBox mode={"contact"} />
                </Col>
            </Row>
        </div>
    )
}

export default memo(ContainerContent)