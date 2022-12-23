import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Pagination } from "./Pagination/Pagination";

const ErrorPage = () => {
    const navigate = useNavigate();
    const redirectToLogin = () => {
        navigate("/login");
    }
    
    return(
        <section className="error-page">
            <h3>Data access is unauthorized. Please login to continue.</h3>
            <button className="error-page-button" onClick={() => redirectToLogin()}>Login</button>
        </section>
    )
}

export const Template = () => {
    
    const user = useSelector(state => state.user.user);

    if(!Object.hasOwn(user, 'email_verified')) {
        return <ErrorPage />
    }
    
    return(
        <section className="main-content">
            <Header name={user.name} picture={user.picture} />
            <Content />
            <Pagination />
            <Footer content={`© 2022 Zurich Insurance Group`} />
        </section>
    )
}