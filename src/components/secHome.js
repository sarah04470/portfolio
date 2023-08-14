import { SectionHome } from "../styles/common/secHome.styles";


const SectionHomeWrap = () => {
    return(
        <SectionHome id="home" class="home">
            <div class="main-img"></div>
            <div class="main-bus">
                <img src="/img/main-bus.png" className="bus-item" width="730px" height="620px" />
            </div>
            <div class="main-title">
                <p>
                    사소한 것도 놓치지 않는<br />
                    퍼블리셔 황선하 입니다
                </p>
            </div>
        </SectionHome>
    )
}

export default SectionHomeWrap;