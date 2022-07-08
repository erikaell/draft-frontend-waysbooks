import { useState } from "react"
import NavbarAdmin from "../components/Navbar/NavbarAdmin"
import { Row, Col, Button, Form } from "react-bootstrap"
import pin from '../assets/pin.svg'
import book from '../assets/add-book-.svg'

function AddBooks() {

    return (
        <>
            <div>
                <div className="backgroundImageFull">
                    <NavbarAdmin />
                    <Row style={{ paddingLeft: "5rem", paddingRight: "5rem", margin: 0 }}>
                        <Col>
                            <h3 className="sentenceSection mb-4">Add Book</h3>
                        </Col>
                        <Col sm="12">
                            <Form className="form">
                                <Form.Group>
                                    <Form.Control type="text" name="title" placeholder="Title" className='mt-3'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="date" name="date" placeholder="Publication Date" className='mt-3'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" name="pages" placeholder="Pages" className='mt-3'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" name="isbn" placeholder="ISBN" className='mt-3'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="number" name="price" placeholder="Price" className='mt-3'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="number" name="qty" placeholder="Stock" className='mt-3'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control as="textarea" name="desc" rows={3} placeholder="Product Description" className='mt-3'></Form.Control>
                                </Form.Group>
                                <Col>
                                    <input
                                        type="file"
                                        id="upload"
                                        name="image"
                                        hidden
                                    />
                                    <label for="upload" className="label-file-add-book">
                                        Attach Book Image <img src={pin} style={{ marginBottom: '2px', marginLeft: '2px', width: '10%' }} alt="" />
                                    </label>
                                </Col>
                                <Col>
                                    <input
                                        type="file"
                                        id="upload"
                                        name="file"
                                        hidden
                                    />
                                    <label for="upload" className="label-file-add-book">
                                        Attach Book File <img src={pin} style={{ marginBottom: '2px', marginLeft: '2px', width: '10%' }} alt="" />
                                    </label>
                                </Col>
                                <div className="justify-content-end d-flex">
                                    <Button variant="dark" style={{ borderRadius: 0, width: '10%', alignItems: 'center', marginBottom: '10px' }}> Add Cart <img src={book} style={{ marginBottom: '2px', marginLeft: '2px'  }} alt="" /></Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default AddBooks;