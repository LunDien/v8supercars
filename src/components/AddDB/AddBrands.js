import {useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import styled from './AddDB.module.scss'
import axios from 'axios'


export default function AddDB() {

    const initState = {
        brand: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        logo: '',
        biglogo: '',
        description: '',
        career: '',
        address: '',

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

    const handleImage = e => {
        const {name, files} = e.target
        setValues({
            ...values,
            [name]: files[0]
        })
    }



    const handleSubmit =(e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('brand', values.brand)
        data.append('imageURL', values.image1)
        data.append('imageURL', values.image2)
        data.append('imageURL', values.image3)
        data.append('imageURL', values.image4)
        data.append('logoURL', values.logo)
        data.append('bigLogoURL', values.biglogo)
        data.append('description', values.description)
        data.append('career', values.career)
        data.append('address', values.address)
        
        axios.post('https://v8supercars-data.herokuapp.com/createbrands', data)
        .then(res => {
            console.log(res)
            window.location = '/addBrands'
        })
        .catch(err => console.log(err))
        
    }


    return (
        <Form className={styled.formDB} onSubmit={handleSubmit}>
    
            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Brand</Form.Label>
                <Col sm={10}>
                    <Form.Select onChange={handleChange} name="brand" required>
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
                    <Form.Control className={styled.formOther} required type="text" value={values.brand} onChange={handleChange} name="brand"/> 
                </Col>       
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Mini Logo</Form.Label>
                <Col sm={10}>
                    <Form.Control type="file" onChange={handleImage} name="logo"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Big Logo</Form.Label>
                <Col sm={10}>
                    <Form.Control type="file" onChange={handleImage} name="biglogo"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Image 1</Form.Label>
                <Col sm={10}>
                    <Form.Control type="file" onChange={handleImage} name="image1"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Image 2</Form.Label>
                <Col sm={10}>
                    <Form.Control type="file" onChange={handleImage} name="image2"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Image 3</Form.Label>
                <Col sm={10}>
                    <Form.Control type="file" onChange={handleImage} name="image3"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Image 4</Form.Label>
                <Col sm={10}>
                    <Form.Control type="file" onChange={handleImage} name="image4"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-white" controlId="formGridDescription">
                <Form.Label column sm={2}>Description</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        required
                        value={values.description}
                        onChange={handleChange}
                        name="description"
                        as="textarea"
                        placeholder="Description Brand"
                        style={{ height: '100px' }}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-white" controlId="formGridCareer">
                <Form.Label column sm={2}>Career</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        required
                        value={values.career}
                        onChange={handleChange}
                        name="career"
                        as="textarea"
                        placeholder="Career Brand"
                        style={{ height: '100px' }}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-white" controlId="formGridAddress">
                <Form.Label column sm={2}>Address</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        required
                        value={values.address}
                        onChange={handleChange}
                        name="address"
                        as="textarea"
                        placeholder="Address Brand"
                        style={{ height: '100px' }}
                    />
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