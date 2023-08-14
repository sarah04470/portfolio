import styled from "@emotion/styled";

export const HeaderWrap = styled.header`
    min-width: 850px; width: 100%; height: 50px; padding: 0 20px; background-color: #e5effa; position: fixed; z-index: 2;

    & .status-bar{ height: 100%; }
    & .status-bar nav{  }
    & .status-bar nav .gnb{  }
    & .status-bar nav .gnb .nav-list{ display: flex; flex-direction: row; gap: 50px; align-items: center; }
    & .status-bar nav .gnb .nav-list .nav-item{  }
    & .status-bar nav .gnb .nav-list .nav-item .item{ color: #333; text-decoration: none; font-weight: 800; font-family: 'SF Pro Text', 'Helvetica', sans-serif; }
`;