import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

export default function Layout(props) {
    return (
        <div class="container-fluid d-flex flex-column vh-100">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}