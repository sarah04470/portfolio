import styled from "@emotion/styled";

export const SectionPortfolio = styled.section`
    width: 100%; min-height: 1100px; padding-bottom: 80px;

    & .title{ padding-top: 60px; }
    & .contents{ width: 100%; }
    & .contents .tab-nav{ position: relative; z-index: 1; }
    & .contents .tab-nav .tab-list{ display: flex; flex-direction: row; gap: 30px; position: absolute; right: calc(0% + 5%); font-size: 1rem; font-weight: 800; }
    & .contents .tab-nav .tab-list .tab-item{  }
    & .contents .tab-nav .tab-list .tab-item a{ color: #aaa; transition: all 0.3s; }
    & .contents .tab-nav .tab-list .tab-item.on a{ color: #333; }
    & .contents .tab-nav .tab-list .bar{ width: 2px; background-color: #aaa; border-radius: 4px; }
    & .contents .tab-contents{ width: 100%; height: 700px; padding-top: 80px; box-sizing: border-box; position: relative; }
    & .contents .tab-contents .design-slick{ width: 80%; height: 100%; margin: 0 auto; }
    & .contents .tab-contents .design-slick .ipad{ position: relative; }
    & .contents .tab-contents .design-slick .ipad .mockup{ position: relative; }
    & .contents .tab-contents .design-slick .ipad .mockup img{ position: absolute; bottom: calc(0%); right: calc(30% - 50px); }
    & .contents .tab-contents .design-slick .ipad .display{ width: 746px; height: 559px; overflow: hidden; position: absolute; right: calc(30% - 26px); bottom: calc(0% + 27px); border-radius: 10px; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); }
    & .contents .tab-contents .design-slick .ipad .display .display-list{ display: flex; flex-direction: row; gap: 0; }
    & .contents .tab-contents .design-slick .ipad .display .display-list .display-item{  }
    & .contents .tab-contents .design-slick .ipad .display .display-list .display-item .item{ width: 746px; height: 559px; outline: none; }
    & .contents .tab-contents .design-slick .iphone{ position: relative; }
    & .contents .tab-contents .design-slick .iphone .mockup{ position: relative; }
    & .contents .tab-contents .design-slick .iphone .mockup img{ position: absolute; bottom: calc(0%); left: 66%; }
    & .contents .tab-contents .design-slick .iphone .mockup .box{ width: 100px; height: 25px; background-color: #505050; position: absolute; bottom: calc(0% + 465px); left: calc(66% + 65px); border-radius: 0px 0px 8px 8px; z-index: 1; }
    & .contents .tab-contents .design-slick .iphone .display{ width: 210px; height: 474px; overflow: hidden; position: absolute; left: calc(66% + 10px); bottom: calc(0% + 8px); border-radius: 24px; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); }
    & .contents .tab-contents .design-slick .iphone .display .display-list{ display: flex; flex-direction: row; gap: 0; }
    & .contents .tab-contents .design-slick .iphone .display .display-list .display-item{  }
    & .contents .tab-contents .design-slick .iphone .display .display-list .display-item .item{ width: 210px; height: 474px; }
    & .contents .tab-contents .dev-slick{ width: 80%; height: 100%; margin: 0 auto; }
    & .contents .tab-contents .dev-slick .imac{ position: relative; }
    & .contents .tab-contents .dev-slick .imac .mockup{ position: relative; }
    & .contents .tab-contents .dev-slick .imac .mockup img{ position: absolute; bottom: calc(0%); right: calc(50% - 280px); }
    & .contents .tab-contents .dev-slick .imac .display{ width: 796px; height: 448px; overflow: hidden; position: absolute; bottom: calc(0% + 234px); right: calc(50% - 262px); border-radius: 4px; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); }
    & .contents .tab-contents .dev-slick .imac .display .display-list{ display: flex; flex-direction: row; gap: 0; }
    & .contents .tab-contents .dev-slick .imac .display .display-list .display-item{  }
    & .contents .tab-contents .dev-slick .imac .display .display-list .display-item .item{ width: 796px; top: 0; }
    & .contents .tab-contents .dev-slick .ipad{ position: relative; }
    & .contents .tab-contents .dev-slick .ipad .mockup{ position: relative; }
    & .contents .tab-contents .dev-slick .ipad .mockup img{ position: absolute; bottom: calc(0%); left: calc(50% + 70px); }
    & .contents .tab-contents .dev-slick .ipad .display{ width: 438px; height: 332px; overflow: hidden; position: absolute; bottom: calc(0% + 16px); left: calc(50% + 86px); border-radius: 8px; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); }
    & .contents .tab-contents .dev-slick .ipad .display .display-list{ display: flex; flex-direction: row; gap: 0; }
    & .contents .tab-contents .dev-slick .ipad .display .display-list .display-item{  }
    & .contents .tab-contents .dev-slick .ipad .display .display-list .display-item .item{ width: 438px; top: 0; }
    & .contents .tab-contents .display-list:focus, & .contents .tab-contents .display-list:active, & .contents .tab-contents .display-list:checked{ outline: none; }

    & .contents .tab-contents .tab-menu{ opacity: 0; box-sizing: border-box; transition: all 0.3s ease-in-out; display: none; }
    & .contents .tab-contents .tab-menu.on{ opacity: 1; display: block; animation: tabOpacity 0.5s ease-in; }
    & .contents .tab-contents .pager{ width: 100%; height: 100%; margin: 0 auto; display: flex; flex-direction: row; justify-content: space-between; align-items: center; }
    & .contents .tab-contents .pager .prev-wrap, & .contents .tab-contents .pager .next-wrap{ z-index: 1; }
    & .contents .tab-contents .pager .prev,
    & .contents .tab-contents .pager .next{ transition: all 0.3s; }
    & .contents .tab-contents .pager .prev:hover, & .contents .tab-contents .pager .prev:checked, & .contents .tab-contents .pager .prev:focus,
    & .contents .tab-contents .pager .next:hover, & .contents .tab-contents .pager .next:checked, & .contents .tab-contents .pager .next:focus{ cursor: pointer; text-shadow: 0 10px 18px 0 rgba(0,0,0,0.15); }

    & .contents .tab-contents .modal{ display: none; width: 100vw; height: 100vh; background-color: rgba(0,0,0, 0.4); z-index: 10; position: fixed; top: 0; bottom: 0; left: 0; right: 0; opacity: 0; animation: tabOpacity 0.5s ease-in; }
    & .contents .tab-contents .modal .modal-window{ max-width: 1400px; min-width: 1100px; width: 80%; height: 80%; background-color: #0F1128; border-radius: 20px; margin: 0 auto; position: relative; padding-top: 80px; top: 10%; }
    & .contents .tab-contents .modal .modal-window .modal-area{ display: flex;  width: 80%; height: 90%; margin: 0 auto; overflow: hidden; border-radius: 8px; }
    & .contents .tab-contents .modal .modal-window .modal-area .modal-list{ display: flex; flex-direction: column; gap: 0; justify-content: flex-start; align-items: center; margin: 0 auto; overflow-y:scroll; -ms-overflow-style: none; scrollbar-width: none; }
    & .contents .tab-contents .modal .modal-window .modal-area .modal-list .modal-item{  }
    & .contents .tab-contents .modal .modal-window .modal-area .modal-list .modal-item .item{ width: 100%; height: auto; }
    & .contents .tab-contents .modal .modal-window .close-button{ position: absolute; top: calc(0% + 3%); right: calc(0% + 3%); background-color: transparent; border: none; outline: none; color: #E9BE82; font-size: 3.75rem; cursor: pointer; }
    & .contents .tab-contents .modal .modal-window .modal-area .modal-list::-webkit-scrollbar { display: none; }
`;