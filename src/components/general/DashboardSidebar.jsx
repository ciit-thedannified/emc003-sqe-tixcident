import ClientSidebarMenu from '../client/ClientSidebarMenu.jsx';
import {Link} from "react-router-dom";

export default function DashboardSidebar({sidebarMenu}) {
    return (
        <div className={`bg-blue-900 text-white h-screen`}>
            {/* Logo Section */}
            <div className="flex items-center p-6">
                <img
                    src="../../assets/images/Tixcident_Icon.png"
                    className={`w-10 h-10 mr-2`}
                    alt="icon" />
                <h1
                    className={`text-xl font-bold`}
                >
                    TIXCIDENT
                </h1>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col w-full">
                {sidebarMenu.map((menu, index) => (
                    <Link key={index} to={menu.link}>
                        <li
                            className="flex items-center pl-6 py-3 hover:bg-blue-800 cursor-pointer transition-colors"
                        >
                            <div className="mr-4">{menu.icon}</div>
                            <span>{menu.label}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}