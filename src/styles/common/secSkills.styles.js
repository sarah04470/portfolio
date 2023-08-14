import styled from "@emotion/styled";

export const SectionSkills = styled.section`
    width: 100%; padding-bottom: 80px; background-color: #fff;

    & .title{ padding-top: 60px; }
    & .contents{ width: 100%; }
    & .contents .skills-list{ display: flex; flex-direction: row; justify-content: space-between; align-items: center; width: 80%; margin: 0 auto; padding-top: 20px; }
    & .contents .skills-list .skills-design, & .contents .skills-list .skills-dev, & .contents .skills-list .skills-ing{ width: 30%; max-width: 420px; min-width: 300px; height: 620px; box-shadow: 0 10px 18px 0 rgba(0,0,0,0.15); border-radius: 20px; background-color: #fff; }
    & .contents .skills-list .status-bar{ height: 40px; border-radius: 20px 20px 0 0; }
    & .contents .skills-list .status-bar .status-nav{ font-size: 0.750rem; font-weight: 700; cursor: default; }
    & .contents .skills-list .tools-list{ width: 80%; margin: 0 auto; display: flex; flex-direction: column; gap: 32px; padding: 33px 0; cursor: default; }
    & .contents .skills-list .tools-list .tools-item{ display: flex; flex-direction: row; justify-content: space-between; align-items: center; }
    & .contents .skills-list .tools-list .tools-item:hover .item-img{ animation: shaking 0.5s; }
    & .contents .skills-list .tools-list .tools-item .item-img{ width: 46px; height: 46px; display: flex; justify-content: center; align-items: center; }
    & .contents .skills-list .tools-list .tools-item .item-img img{ width: 46px; max-width: 46px; max-height: 46px; }
    & .contents .skills-list .tools-list .tools-item .item-bar{ display: flex; flex-direction: column; width: 60%; gap: 8px; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-name{ font-size: 0.750rem; font-weight: 700; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per{ width: 100%; height: 10px; background-color: #BCDDFF; border-radius: 5px; overflow: hidden; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front{ height: 100%; background-color: #6FB7FF; border-radius: 5px; transform-origin: 0 0; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front.per100{ width: 100%; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front.per90{ width: 90%; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front.per80{ width: 80%; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front.per70{ width: 70%; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front.per60{ width: 60%; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front.per50{ width: 50%; }
    & .contents .skills-list .tools-list .tools-item .item-bar .bar-per .bar-front.per40{ width: 40%; }
    & .contents .skills-list .tools-list .tools-item .item-per{ font-size: 1rem; font-weight: 700; }
    & .contents .skills-list .tools-list .tools-item:hover .item-bar .bar-per .bar-front.per100, & .contents .skills-list .tools-list .tools-item:hover .item-bar .bar-per .bar-front.per90,
    & .contents .skills-list .tools-list .tools-item:hover .item-bar .bar-per .bar-front.per80, & .contents .skills-list .tools-list .tools-item:hover .item-bar .bar-per .bar-front.per70,
    & .contents .skills-list .tools-list .tools-item:hover .item-bar .bar-per .bar-front.per60, & .contents .skills-list .tools-list .tools-item:hover .item-bar .bar-per .bar-front.per50,
    & .contents .skills-list .tools-list .tools-item:hover .item-bar .bar-per .bar-front.per40 { animation: filling 1s ease-out; }
`;