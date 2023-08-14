import styled from "@emotion/styled";

export const SectionAbout = styled.section`
    width: 100%; padding-bottom: 80px;

    & .title{ padding-top: 60px; }
    & .contents{ width: 100%; display: flex; margin: 0 auto; justify-content: center; align-items: center; gap: 60px; }
    & .contents .about-me{  }
    & .contents .about-me .img{ background: url(../img/memoji_01.png) no-repeat; background-size: 240px 240px; width: 240px; height: 240px; background-color: #fff; }
    & .contents .about-me .name{ font-size: 2rem; font-weight: 900; margin-top: 40px; text-align: center; }
    & .contents .about-info{ width: 50%; max-width: 560px; min-width: 350px; height: 640px; box-shadow: 0 10px 18px 0 rgba(0,0,0,0.15); border-radius: 20px; }
    & .contents .about-info .status-bar{ height: 40px; border-radius: 20px 20px 0 0; }
    & .contents .about-info .info-txt{ display: flex; flex-direction: column; justify-content: center; gap: 60px; width: 70%; margin: 0 auto; padding: 120px 0; font-size: 0.875rem; font-weight: 700; line-height: 1.9; color: #333; }
    & .contents .about-info .info-txt a{ color: #333; }
    & .contents .about-info .info-txt .info-txt-list{  }
    & .contents .about-info .info-txt .info-txt-list .info-txt-item{  }
`;