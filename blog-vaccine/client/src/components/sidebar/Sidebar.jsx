import logo from "../../assets/images/logo.png"
import "./sidebar.css";

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">BỘ Y TẾ VIỆT NAM</span>
                <img
                 src={logo}
                 alt=""
                />
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">QUỐC GIA</span>   
                <ul className="sidebarList">
                <li className="sidebarListItem">Hoa Kỳ</li>
                <li className="sidebarListItem">Nga</li>
                <li className="sidebarListItem">Cuba</li>
                <li className="sidebarListItem">Anh</li>
                <li className="sidebarListItem">Trung Quốc</li>
                <li className="sidebarListItem">Bỉ & Hà Lan</li>
               </ul>
            </div>
        </div>
    );
}
