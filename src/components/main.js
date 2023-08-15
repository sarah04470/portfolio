import { MainWrap } from "../styles/common/main.styles";
import SectionHomeWrap from "./secHome"
import SectionAboutWrap from "./secAbout"
import SectionSkillsWrap from "./secSkills"
import SectionPortfolioWrap from "./secPortfolio"
import SectionContactWrap from "./secContact"


const Main = () => {
    return(
        <MainWrap>
            <SectionHomeWrap/>
            <SectionAboutWrap/>
            <SectionSkillsWrap/>
            <SectionPortfolioWrap/>
            {/* <SectionContactWrap/> */}

        </MainWrap>
    )
}

export default Main;