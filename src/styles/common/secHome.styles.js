import styled from "@emotion/styled";

export const SectionHome = styled.section`
    width: 100%; height: calc(100vh - 50px); background-color: #fff; position: relative; box-sizing: border-box; overflow: hidden;

    & .main-img{ background: url(/img/main-img.png) no-repeat 100% 100%; background-size: cover; width: 100%; height: 100%; padding: 0; margin: 0; position: absolute; }
    & .main-bus{ position: absolute; right: -300px; top: -230px; animation: slideBus 16s cubic-bezier(0.4, 0, 0.2, 1) infinite; animation-delay: 1s; }
    & .main-title{ position: absolute; width: 80%; height: 100%; margin: 0 10%; text-align: right; bottom: calc(0% - 100vh + 30%); }
    & .main-title p{ font-size: 3.5rem; font-weight: 900; font-family: 'SF Pro Text', 'Helvetica', sans-serif; line-height: 1.2; }
`;