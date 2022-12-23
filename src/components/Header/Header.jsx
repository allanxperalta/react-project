import Logo from "../../assets/images/zurich.png";
import "./header.css";

export const Header = ({ name, picture }) => {
    return(
        <section className="header">
            <section className="login-details">
                <img src={picture} alt="" className="login-picture" />
                <section className="login-name">
                    Login As: <strong>{ name }</strong>
                </section>
            </section>
            <img src={Logo} alt="Zurich" className="logo" />        
        </section>
    )
}