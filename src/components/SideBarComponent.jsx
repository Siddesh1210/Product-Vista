import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function SideBarComponent() {
    const location = useLocation();
    return(
        <>
            <div className="w-[15%] min-h-screen lg:flex flex-col hidden border-r-2 bg-[#F9F9F9]">
                <ul className="flex flex-col justify-center items-start mt-4 text-md">
                    <Link to="/" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/" ? "bg-primary text-white" : "text-black"
                            }`}
                        >
                            <i className="bi bi-grid mr-2"></i> Products
                        </div>
                    </Link>
                    <Link to="/compare-products" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/compare-products" ? "bg-primary text-white" : "text-black"
                            }`}
                        >
                            <i className="bi bi-layout-split mr-2"></i> Compare
                        </div>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default SideBarComponent;