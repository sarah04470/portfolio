import { HeaderWrap } from "@styles/header.style";


 impo

const Header = () => {
    return(

        <HeaderWrap>
            {/* status bar 전체 + txt */}
            <div className="status-bar">
                <div className="ellipse">
                    {/* 타원만 */}
                    <div className="el-1st"></div>
                    <div className="el-2nd"></div>
                    <div className="el-3rd"></div>
                </div>
                <nav>
                    {/* gnb txt */}
                    <div className="gnb">
                        <ul className="nav-list">
                            <li classNameName="nav-item">
                                <a href="#home" className="item">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="item">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="item">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="item">PortFolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="item">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </HeaderWrap>
    )
}

export default Header;