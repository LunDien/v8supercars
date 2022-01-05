import { useState, useEffect } from 'react'
import { useStore } from '../../../Store'
import styled from '../ContentBrand.module.scss'


export default function TextContent({mode}) {
    const [state] = useStore()
    const [content, setContent] = useState("")
    useEffect(() => {
        state.brands?.map(brand => brand.brand.toLowerCase().split('-').join('') === state.brand && setContent(brand[mode]))
    }, [mode])
    return (
        <div className={styled[mode]}>
            <p className={mode === 'career' ? "w-75 fs-2 fw-bold" : "w-100 fs-2 fw-bold"}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</p>
            <div className={mode === 'career' ? "w-75 fs-6" : "w-100 fs-6"}>
                {content.split('\\nn').map((string, index) => string.split('\\n').length > 1
                            ? string.split('\\n').map((string2, index2) => <span key={index2} align="left" className="d-block w-100">{string2}</span>)
                            : <p key={index} align="left">{string}</p>
                )}
            </div>
        </div>
    )
}