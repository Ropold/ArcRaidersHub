import {useNavigate} from "react-router-dom";
import "./styles/Welcome.css"
import welcomePic from "../assets/rainbow-logo-small.png"

export default function Welcome(){
    const navigate = useNavigate();

    return (
        <>
            <h2>Arc Raiders Hub</h2>
            <div className="image-wrapper margin-top-20">
                <img
                    src={welcomePic}
                    alt="Welcome to Arc Raiders Hub"
                    className="logo-welcome"
                    onClick={()=> navigate("/items")}
                />
            </div>
        </>
    )
}