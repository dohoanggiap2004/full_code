import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import UserAvatar from "../../User/UserAvatar";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedItem } from "../../../store/reducers/itemReducer";
import { logoutAdmin } from "../../../store/actions/authAction";
function Sidebar() {
    const dispatch = useDispatch();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { selectedItemAdmin } = useSelector((state) => state.item);
    const navigate = useNavigate();
    const sidebarRef = useRef(null);
    const handleClickOutside = (event) => {
        // Check if the clicked target is outside the sidebar
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false); // Close sidebar
        }
    };

    const handleClick = (value) => {
        dispatch(setSelectedItem(value));
    }

    const handleLogoutAdmin = () => {
        dispatch(logoutAdmin())
        navigate('/admin/login')
    }

    useEffect(() => {
        // Attach the event listener when the sidebar is open
        if (isSidebarOpen) {
            document.addEventListener("touchstart", handleClickOutside);
        } else {
            document.removeEventListener("touchstart", handleClickOutside);
        }

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
                aria-label="Sidebar"
            >

                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 border-2 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to={"/admin"}
                                onClick={() => handleClick('dashboard')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'dashboard' ? 'bg-gray-300' : 'bg-none'}`}
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/admin/users"}
                                onClick={() => handleClick('users')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'users' ? 'bg-gray-300' : 'bg-none'}`}
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path
                                        d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/admin/products"}
                                onClick={() => handleClick('products')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'products' ? 'bg-gray-300' : 'bg-none'}`}
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20"
                                >
                                    <path
                                        d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/admin/orders"}
                                onClick={() => handleClick('orders')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'orders' ? 'bg-gray-300' : 'bg-none'}`}
                            >
                                <svg viewBox="0 0 1024 1024" fill="#000000" className="icon h-5 w-5" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z" fill=""></path>
                                        <path
                                            d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                                            fill=""></path>
                                        <path
                                            d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                                            fill=""></path>
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/admin/order-items"}
                                onClick={() => handleClick('orderItems')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'orderItems' ? 'bg-gray-300' : 'bg-none'}`}
                            >
                                <svg className='h-5 w-5' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512"
                                     fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <style type="text/css"></style>
                                        <g>
                                            <path className="st0"
                                                  d="M311.069,130.515c-0.963-5.641-5.851-9.768-11.578-9.768H35.43c-7.61,0-13.772,6.169-13.772,13.765 c0,7.61,6.162,13.772,13.772,13.772h64.263c7.61,0,13.772,6.17,13.772,13.773c0,7.603-6.162,13.772-13.772,13.772H13.772 C6.169,175.829,0,181.998,0,189.601c0,7.603,6.169,13.764,13.772,13.764h117.114c6.72,0,12.172,5.46,12.172,12.18 c0,6.72-5.452,12.172-12.172,12.172H68.665c-7.61,0-13.772,6.17-13.772,13.773c0,7.602,6.162,13.772,13.772,13.772h45.857 c6.726,0,12.179,5.452,12.179,12.172c0,6.719-5.453,12.172-12.179,12.172H51.215c-7.61,0-13.772,6.169-13.772,13.772 c0,7.603,6.162,13.772,13.772,13.772h87.014l5.488,31.042h31.52c-1.854,4.504-2.911,9.421-2.911,14.598 c0,21.245,17.218,38.464,38.464,38.464c21.237,0,38.456-17.219,38.456-38.464c0-5.177-1.057-10.094-2.911-14.598h100.04 L311.069,130.515z M227.342,352.789c0,9.146-7.407,16.553-16.553,16.553c-9.152,0-16.56-7.407-16.56-16.553 c0-6.364,3.627-11.824,8.892-14.598h15.329C223.714,340.965,227.342,346.424,227.342,352.789z"></path>
                                            <path className="st0"
                                                  d="M511.598,314.072l-15.799-77.941l-57.689-88.759H333.074l32.534,190.819h38.42 c-1.846,4.504-2.904,9.421-2.904,14.598c0,21.245,17.219,38.464,38.456,38.464c21.246,0,38.464-17.219,38.464-38.464 c0-5.177-1.057-10.094-2.91-14.598h16.741c6.039,0,11.759-2.708,15.582-7.386C511.273,326.136,512.8,319.988,511.598,314.072z M392.529,182.882h26.314l34.162,52.547h-51.512L392.529,182.882z M456.14,352.789c0,9.146-7.407,16.553-16.56,16.553 c-9.138,0-16.552-7.407-16.552-16.553c0-6.364,3.635-11.824,8.892-14.598h15.329C452.513,340.965,456.14,346.424,456.14,352.789z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Order Items</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/admin/vouchers'
                                onClick={() => {
                                    handleClick('vouchers')
                                }}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'vouchers' ? 'bg-gray-300' : 'bg-none'}`}
                            >
                                <svg width="64px" className={'h-5, w-5'} viewBox="0 0 48 48"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="invisible_box" data-name="invisible box">
                                                <rect width="48" height="48" fill="none"></rect>
                                            </g>
                                            <g id="Layer_7" data-name="Layer 7">
                                                <g>
                                                    <path
                                                        d="M43,7H38a2,2,0,0,0-1.4.6L34,10.2,31.4,7.6A2,2,0,0,0,30,7H5a2.9,2.9,0,0,0-3,3V38a2.9,2.9,0,0,0,3,3H30a2,2,0,0,0,1.4-.6L34,37.8l2.6,2.6A2,2,0,0,0,38,41h5a2.9,2.9,0,0,0,3-3V10A2.9,2.9,0,0,0,43,7ZM42,37H38.8l-3.4-3.4a1.9,1.9,0,0,0-2.8,0L29.2,37H6V11H29.2l3.4,3.4a1.9,1.9,0,0,0,2.8,0L38.8,11H42Z"></path>
                                                    <path
                                                        d="M34,17a2,2,0,0,0-2,2v2a2,2,0,0,0,4,0V19A2,2,0,0,0,34,17Z"></path>
                                                    <path
                                                        d="M34,25a2,2,0,0,0-2,2v2a2,2,0,0,0,4,0V27A2,2,0,0,0,34,25Z"></path>
                                                    <circle cx="14" cy="20" r="2"></circle>
                                                    <circle cx="22" cy="28" r="2"></circle>
                                                    <path
                                                        d="M21.6,17.6l-10,10a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0l10-10a2,2,0,0,0-2.8-2.8Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Vouchers</span>
                            </Link>
                        </li>

                        <li>
                            <a
                                onClick={() => {
                                    handleLogoutAdmin()
                                }}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                            >
                                <svg viewBox="0 0 24 24" className={'h-5 w-5'} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M16 16.9998L21 11.9998M21 11.9998L16 6.99982M21 11.9998H9M12 16.9998C12 17.2954 12 17.4432 11.989 17.5712C11.8748 18.9018 10.8949 19.9967 9.58503 20.2571C9.45903 20.2821 9.31202 20.2985 9.01835 20.3311L7.99694 20.4446C6.46248 20.6151 5.69521 20.7003 5.08566 20.5053C4.27293 20.2452 3.60942 19.6513 3.26118 18.8723C3 18.288 3 17.5161 3 15.9721V8.02751C3 6.48358 3 5.71162 3.26118 5.12734C3.60942 4.3483 4.27293 3.75442 5.08566 3.49435C5.69521 3.29929 6.46246 3.38454 7.99694 3.55503L9.01835 3.66852C9.31212 3.70117 9.45901 3.71749 9.58503 3.74254C10.8949 4.00297 11.8748 5.09786 11.989 6.42843C12 6.55645 12 6.70424 12 6.99982"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Đăng xuất</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>

            <div className="hidden bg-gray-50 border-2 h-12 md:flex items-center pe-12">
                <UserAvatar/>
            </div>
            {/* content */}
        </>
    );
}

export default Sidebar;
