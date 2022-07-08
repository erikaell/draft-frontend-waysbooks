import NavbarUser from "../components/Navbar/NavbarUser"
import { Row, Col, Button } from "react-bootstrap"
import email from '../assets/email.svg'
import gender from '../assets/gender.svg'
import phone from '../assets/phone.svg'
import location from '../assets/location.svg'
import profile from '../assets/blank-profile.png'

function Profile() {

    return (
        <>
            <div>
                    <div className="backgroundImageFull">
                        <NavbarUser />
                        <Row style={{ paddingLeft:"15rem", paddingRight:"15rem", margin:0 }}>
                            <Col sm={12}>
                            <h3 className="sentenceSection mt-4">Profile</h3>
                            </Col>
                            <Col className="profileContainer" sm={12}>
                            <Row>
                                <Col sm={9}>
                                    <Row className="mb-3">
                                        <Col sm={1} className="d-flex justify-content-end align-items-center">
                                            <img src={email} style={{ width:"80%", margin:0}} alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{margin:0, color:"black",fontWeight:"bold"}}>user@mail.com</p>
                                            <p style={{margin:0}} className="text-muted">Email</p>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col sm={1} className="d-flex justify-content-end align-items-center">
                                            <img src={gender} style={{ width:"80%", margin:0}} alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{margin:0, color:"black",fontWeight:"bold"}}>Male</p>
                                            <p style={{margin:0}} className="text-muted">Gender</p>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col sm={1} className="d-flex justify-content-end align-items-center">
                                            <img src={phone} style={{ width:"80%", margin:0}} alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{margin:0, color:"black",fontWeight:"bold"}}>085858585858</p>
                                            <p style={{margin:0}} className="text-muted">Mobile Number</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={1} className="d-flex justify-content-end align-items-center">
                                            <img src={location} style={{ width:"80%", margin:0}} alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p style={{margin:0, color:"black", fontWeight:"bold"}}>Jalan jalan jalan jalan jalan</p>
                                            <p style={{margin:0}} className="text-muted">Location</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <div className="d-flex justify-content-center">
                                    <img src={profile} style={{ borderRadius: 5, width:"80%", margin:0}} alt="" />
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                    <Button variant="danger" style={{ borderRadius: 5, width:'80%', alignItems: 'center' }}> Edit Profile </Button>
                                    </div>
                                </Col>
                            </Row>
                            </Col>
                            <Col sm={12}>
                            <h3 className="sentenceSection mt-4">My Books</h3>
                            </Col>
                        </Row>
                </div>
            </div>
        </>
    );
}

export default Profile;