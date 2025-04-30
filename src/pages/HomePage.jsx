import HeaderComponent from "../components/HeaderComponent";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div className="flex flex-col items-center ">
            <HeaderComponent />
            <Link
                to="/notes"
            >
                <img src={logo} alt="Logo" />

            </Link>
        </div>
    );
}

export default HomePage;