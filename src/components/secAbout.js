import { SectionAbout } from "../styles/common/secAbout.styles";


const SectionAboutWrap = () => {
    return(
        <SectionAbout id="about" className="about">
                <div className="title">
                    <div className="title-num">01</div>
                    <div className="title-txt">About</div>
                </div>
                <div className="contents">
                    <div className="about-me">
                        <div className="img"></div>
                        <div className="name">황선하</div>
                    </div>
                    <div className="about-info">
                        <div className="status-bar">
                            <div className="ellipse">
                                <div className="el-1st"></div>
                                <div className="el-2nd"></div>
                                <div className="el-3rd"></div>
                            </div>
                        </div>
                        <div className="info-txt">
                            <table className="info-txt-list">
                                <colgroup>
                                    <col style={{width: '40%'}} />
                                    <col style={{width: '60%'}} />
                                </colgroup>
                                <tr className="info-txt-item">
                                    <td className="item">Name</td>
                                    <td className="item">황선하, Hwang Seonha</td>
                                </tr>
                                <tr className="info-txt-item">
                                    <td className="item">Birth</td>
                                    <td className="item">2000 . 11 . 9</td>
                                </tr>
                                <tr className="info-txt-item">
                                    <td className="item">Phone</td>
                                    <td className="item">010 5214 0447</td>
                                </tr>
                                <tr className="info-txt-item">
                                    <td className="item">Email</td>
                                    <td className="item">sarah04470@naver.com</td>
                                </tr>
                            </table>
                            <table className="info-txt-list">
                                <colgroup>
                                    <col style={{width: '40%'}} />
                                    <col style={{width: '60%'}} />
                                </colgroup>
                                <tr className="info-txt-item">
                                    <td className="item">23 . 3 - 23 . 7</td>
                                    <td className="item">프론트엔드 과정 수료</td>
                                </tr>
                                <tr className="info-txt-item">
                                    <td className="item">22 . 1 - 23 . 1</td>
                                    <td className="item">DDP 디자인스토어 웹디자이너</td>
                                </tr>
                                <tr className="info-txt-item">
                                    <td className="item">19 . 3 - 22 . 2</td>
                                    <td className="item">경인여자대학교 광고디자인학과 졸업</td>
                                </tr>
                                <tr className="info-txt-item">
                                    <td className="item">17 . 2 - 19 . 2</td>
                                    <td className="item">옥련여자고등학교 졸업</td>
                                </tr>
                            </table>
                            <table className="info-txt-list">
                                <colgroup>
                                    <col style={{width: '40%'}} />
                                    <col style={{width: '60%'}} />
                                </colgroup>
                                <tr className="info-txt-item">
                                    <td className="item">2023</td>
                                    <td className="item">컴퓨터 그래픽스 운용기능사 (필기)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </SectionAbout>
    )
}

export default SectionAboutWrap;