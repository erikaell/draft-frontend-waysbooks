import { Modal, Button } from 'react-bootstrap'

export default function Login({ loginHere, loginShow, setLoginShow, setRegisterShow }) {

    return (
        <Modal show={loginShow} onHide={() => setLoginShow(false)} centered>
            <Modal.Body className="text-dark">
                <h3 className="sentenceHead" style={{ textAlign: "left", fontWeight: "bold" }}>
                    Login
                </h3>
                <div className="mt-2">
                    <form>
                        <div className="mt-3 form">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="px-3 py-2 mt-3"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="px-3 py-2 mt-3"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btnLogin">Login</button>
                        </div>
                        <p className="mt-3">Don't have an account? Click <button onClick={loginHere} className="btnHere" >here</button></p>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}
