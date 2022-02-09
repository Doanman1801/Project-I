import "./header.css"
import background from "../../assets/images/covid-19.png"

export default function Header() {
    return (
        <div className="header">
            <img 
            className="headerImg" 
            src={background}
            alt=""
             />
        </div>
    )
}
