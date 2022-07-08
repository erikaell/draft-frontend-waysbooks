import NavbarAuth from "../components/Navbar/NavbarAuth"
import Books from "../components/Books"

function Landing() {

    return (
        <>
            <div>
                <div className="bodyHome">
                    <div className="backgroundImage">
                        <NavbarAuth />
                        <Books />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Landing;