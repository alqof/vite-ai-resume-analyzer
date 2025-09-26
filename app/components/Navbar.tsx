import { IoCloudUploadOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();
    const isUploadPage = location.pathname === "/upload";

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">REZPYAI</p>
            </Link>
            {location.pathname==="/" ? (
                <Link to="/upload" className="w-fit primary-button flex items-center gap-2">
                    <IoCloudUploadOutline/> Upload Resume
                </Link>
            ) : (
                <Link to="/" className="w-fit primary-button flex items-center gap-2">
                    <LuLayoutDashboard /> Back Home
                </Link>
            )}
        </nav>
    )
}
export default Navbar