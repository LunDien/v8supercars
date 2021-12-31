import {useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import styled from './AddDB.module.scss'
import axios from 'axios'


export default function AddDB() {

    const initState = {
        name: '',
        brand: '',
        description: '',
        videoURL: ''

    }

    const [values, setValues] = useState(initState)

    const handleChange = e => {
        const { name, value } = e.target
        if(value === 'Other') {
            e.target.style.display = 'none'
            e.target.nextElementSibling.style.display = 'block'
            e.target.nextElementSibling.focus()
        }
        else {
            setValues({
                ...values,
                [name] : value
            })
        }
    }


    const handleSubmit =(e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', values.name)
        data.append('brand', values.brand)
        data.append('description', values.description)
        data.append('videoURL', values.videoURL)
        
        console.log(data)
        

        axios.post('https://v8supercars-data.herokuapp.com/createvideos', data)
        .then(res => {
            console.log(res)
            window.location = '/addVideos'
        })
        .catch(err => console.log(err))
        
    }


    return (
        <Form className={styled.formDB} onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3 text-white" controlId="formGridName">
                <Form.Label column sm={2}>Name</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={values.name} onChange={handleChange} name="name"/> 
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Brand</Form.Label>
                <Col sm={10}>
                    <Form.Select onChange={handleChange} name="brand">
                        <option>--Choose one a brand--</option>
                        <option value="Audi">Audi</option>
                        <option value="Aston Martin">Aston Martin</option>
                        <option value="BMW">BMW</option>
                        <option value="Bugatti">Bugatti</option>
                        <option value="Ferrari">Ferrari</option>
                        <option value="Ford">Ford</option>
                        <option value="Lamborghini">Lamborghini</option>
                        <option value="McLaren">McLaren</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Koenigsegg">Koenigsegg</option>
                        <option value="Pagani">Pagani</option>
                        <option value="Porsche">Porsche</option>
                        <option value="W-Motors">W-Motors</option>
                        <option value="Other">Other...</option>
                    </Form.Select>
                    <Form.Control className={styled.formOther} type="text" value={values.brand} onChange={handleChange} name="brand"/> 
                </Col>
                
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-white" controlId="formGridDescription">
                <Form.Label column sm={2}>Description</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        value={values.description}
                        onChange={handleChange}
                        name="description"
                        as="textarea"
                        placeholder="Description Car"
                        style={{ height: '100px' }}
                    />
                </Col>
            </Form.Group>
        
            <Form.Group as={Row} className="mb-3 text-white" controlId="formGridVideoLink">
                <Form.Label column sm={2}>Video Link</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={values.videoURL} onChange={handleChange} name="videoURL"/>
                </Col>
            </Form.Group>
            
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button variant="primary" size="lg" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}