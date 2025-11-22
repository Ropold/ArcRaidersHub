import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./styles/Navbar.css";

type NavbarProps = {
    user: string;
    getUser: () => void;
    getUserDetails: () => void;
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export default function Navbar(props: Readonly<NavbarProps>) {
    const [showLanguagePopup, setShowLanguagePopup] = React.useState(false);

    const navigate = useNavigate();

    function loginWithGithub() {
        const host = window.location.host === "localhost:5173" ? "http://localhost:8080" : window.location.origin;
        window.open(host + "/oauth2/authorization/github", "_self");
    }

    function logoutFromGithub() {
        axios
            .post("/api/users/logout")
            .then(() => {
                props.getUser();
                props.getUserDetails();
                navigate("/");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    }

    return(
        <nav>
            <h3>Navbar</h3>
        </nav>
    )
}