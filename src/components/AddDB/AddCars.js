import {useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import styled from './AddDB.module.scss'
import axios from 'axios'


export default function AddDB() {

    const initState = {
        name: '',
        brand: '',
        series: '',
        year: '',
        type: '',
        engine: '',
        price: '',
        discount: '',
        quantity: '',
        weight: '',
        topSpeed: '',
        increaseSpeed: '',
        title: '',
        description: '',
        videoID: ''

    }

    const init = {
        image: '',
    }

    const [values, setValues] = useState(initState)
    const [files, setFiles] = useState(init)

    const handleChange = e => {
        const { name, value } = e.target
        if(value === 'Other') {
            e.target.style.display = 'none'
            e.target.nextElementSibling.style.display = 'block'
            e.target.nextElementSibling.focus()
        }
        else if(name === 'price' || name === 'discount' || name === 'quantity' || name === 'year') {
            if(Number(value)) {
                setValues({
                    ...values,
                    [name] : Number(value)
                })
            }
        }
        else {
            setValues({
                ...values,
                [name] : value
            })
        }
    }

    const handleImage = e => {
        
        setFiles(e.target.files)
    }



    const handleSubmit =(e) => {
        e.preventDefault()
        const data = new FormData()
        for (var i = 0; i < files.length; i++) {
            data.append('images', files[i])
        }
        if(!values.discount) {
            values.discount = 0
            data.append('discount', values.discount)
        }
        else {
            data.append('discount', values.discount)
        }
        data.append('name', values.name)
        data.append('brand', values.brand)
        data.append('series', values.series)
        data.append('price', values.price)
        data.append('quantity', values.quantity)
        data.append('weight', values.weight)
        data.append('topSpeed', values.topSpeed)
        data.append('increaseSpeed', values.increaseSpeed)
        data.append('year', values.year)
        data.append('engine', values.engine)
        data.append('type', values.type)
        data.append('description', values.description)
        data.append('videoID', values.videoID)
        
        

        axios.post('https://v8supercars-data.herokuapp.com/createcars', data)
        .then(res => {
            console.log(res)
            window.location = '/addCars'
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
            <Row className="mb-3 text-white">
                <Col>
                    <Form.Group as={Row} controlId="formGridSeries">
                    <Form.Label column sm={4}>Series</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.series} onChange={handleChange} name="series"/>
                    </Col>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group as={Row} controlId="formGridYear">
                    <Form.Label column sm={4}>Year</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.year} onChange={handleChange} name="year"/>
                    </Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3 text-white">
                <Col>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>Type</Form.Label>
                        <Col sm={8}>
                            <Form.Select onChange={handleChange} name="type">
                                <option>--Choose one a type--</option>
                                <option value="SuperCar">Supercar</option>
                                <option value="HyperCar">HyperCar</option>
                                <option value="MegaCar">MegaCar</option>
                                <option value="LuxuryCar">LuxuryCar</option>
                                <option value="Other">Other...</option>
                            </Form.Select>
                            <Form.Control type="text" className={styled.formOther} value={values.type} onChange={handleChange} name="type"/>

                        </Col>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>Engine</Form.Label>
                        <Col sm={8}>
                            <Form.Select onChange={handleChange} name="engine">
                                <option>--Choose one a engine--</option>
                                <option value="V8">V8</option>
                                <option value="V12">V12</option>
                                <option value="Electric">Electric</option>
                                <option value="Other">Other...</option>
                            </Form.Select>
                            <Form.Control type="text" className={styled.formOther} value={values.engine} onChange={handleChange} name="engine"/>

                        </Col>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3 text-white">
                <Col>
                    <Form.Group as={Row} controlId="formGridPrice">
                    <Form.Label column sm={4}>Price</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.price} onChange={handleChange} name="price"/>
                    </Col>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group as={Row} controlId="formGridDiscount">
                    <Form.Label column sm={4}>Discount</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.discount} onChange={handleChange} name="discount"/>
                    </Col>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3 text-white">
                <Col>
                    <Form.Group as={Row} controlId="formGridQuantity">
                    <Form.Label column sm={4}>Quantity</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.quantity} onChange={handleChange} name="quantity"/>
                    </Col>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group as={Row} controlId="formGridWeight">
                    <Form.Label column sm={4}>Weight</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.weight} onChange={handleChange} name="weight"/>
                    </Col>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3 text-white">
                <Col>
                    <Form.Group as={Row} controlId="formGridTopSpeed">
                    <Form.Label column sm={4}>Top Speed</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.topSpeed} onChange={handleChange} name="topSpeed"/>
                    </Col>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group as={Row} controlId="formGridIncreaseSpeed">
                    <Form.Label column sm={4}>Increase Speed</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" value={values.increaseSpeed} onChange={handleChange} name="increaseSpeed"/>
                    </Col>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group as={Row} className="mb-3 text-white">
                <Form.Label column sm={2}>Image</Form.Label>
                <Col sm={10}>
                    <Form.Control type="file" onChange={handleImage} name="image" multiple/>
                </Col>
            </Form.Group>
           
            {/* <Form.Group as={Row} className="mb-3 text-white" controlId="formGridTitle">
                <Form.Label column sm={2}>Title</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={values.title} onChange={handleChange} name="title"/>
                </Col>
            </Form.Group> */}

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
        
            <Form.Group as={Row} className="mb-3 text-white" controlId="formGridYoutubeLink">
                <Form.Label column sm={2}>Youtube IDLink</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={values.videoID} onChange={handleChange} name="videoID"/>
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