import { SectionPortfolio } from "../styles/common/secPortfolio.styles";
import React , { useEffect, useState } from "react";
import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const SectionPortfolioWrap = () => {

    const [ activeTab, setActiveTab ] = useState("tab01");
    const [ isModalVisible, setModalVisible ] = useState(false);
    const [ activeModalIndex, setactiveModalIndex ] = useState(0);

    useEffect(() => {
        // DOMContentLoaded 이벤트를 처리하는 useEffect
        document.addEventListener("DOMContentLoaded", function(){
            // 탭 변경을 처리하기 위한 이벤트 리스너 추가
            $('ul.tab-list li').click(function() {
                var activeTab = $(this).attr('data-tab');
                $('ul.tab-list li').removeClass('on');
                $('.tab-menu').removeClass('on');
                $(this).addClass('on');
                $('#' + activeTab).addClass('on');
                
                // 탭이 변경될 때마다 slick 캐러셀을 새로고침
                // $('.device-slick .device-container').slick('refresh');
                $('.design-slick .display-list').slick('refresh');
                $('.dev-slick .display-list').slick('refresh');
            });

            // 페이지 로드 시 slick 캐러셀 초기화
            // design slick 의 아이패드 캐러셀 초기화
            $('.design-slick .ipad .display-list').slick({
                slide: 'li',
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1500,
                draggable: false,
                dots: false,
                prevArrow: $('.design-slick .pager .prev-wrap'),
                nextArrow: $('.design-slick .pager .next-wrap'),
                speed: 1500,
                touchThreshold: 100,
            });

            // design slick에 있는 아이폰 캐러셀 초기화
            $('.design-slick .iphone .display-list').slick({
                slide: 'li',
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1500,
                draggable: false,
                dots: false,
                prevArrow: $('.design-slick .pager .prev'),
                nextArrow: $('.design-slick .pager .next'),
                speed: 1500,
                touchThreshold: 100,
            });


            // 페이지 로드 시 slick 캐러셀 초기화
            // dev-slick imac 캐러셀 초기화
            $('.dev-slick .imac .display-list').slick({
                slide: 'li',
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1500,
                draggable: false,
                dots: false,
                prevArrow: $('.dev-slick .pager .prev-wrap'),
                nextArrow: $('.dev-slick .pager .next-wrap'),
                speed: 1500,
                touchThreshold: 100,
            });

            // dev-slick ipad 캐러셀 초기화
            $('.dev-slick .ipad .display-list').slick({
                slide: 'li',
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1500,
                draggable: false,
                dots: false,
                prevArrow: $('.dev-slick .pager .prev'),
                nextArrow: $('.dev-slick .pager .next'),
                speed: 1500,
                touchThreshold: 100,
            });
        });

        // 클릭 이벤트 처리
        $('.design-slick .display-list li').click(function(event) {
            const index = $(this).index();
            setActiveModalIndex(index);
            setModalVisible(true);
            $('body').css('overflow', 'hidden');
            $('.modal').css('opacity', '1');
            event.stopPropagation();
        });
    
        $('.modal .close-button').click(function() {
            setModalVisible(false);
            $('body').css('overflow', 'auto');
        });
    
        $(document).keydown(function(event) {
            if (event.key === 'Escape') {
            setModalVisible(false);
            $('body').css('overflow', 'auto');
            }
        });   
    
        const handleTabClick = (tab) => {
            setActiveTab(tab);
        };

        const handleModalOpen = (index) => {
            setactiveModalIndex(index);
            setModalVisible(true);
        };
        
        const handleModalClose = () => {
            setModalVisible(false);
        };

    }, []);

    const settings = {

    };


    return(
        <SectionPortfolio id="portfolio" className="portfolio">
                <div className="title">
                    <div className="title-num">03</div>
                    <div className="title-txt">PortFolio</div>
                </div>
                <div className="contents">
                    <div className="tab-nav">
                        <ul className="tab-list">
                            <li className="tab-item on" data-tab="tab01"><a href="javascript:void(0);">Graphic Design</a></li>
                            <li className="bar"></li>
                            <li className="tab-item" data-tab="tab02"><a href="javascript:void(0);">Web Publishing</a></li>
                        </ul>
                    </div>
                    <div className="tab-contents">
                        <div id="tab01" className="device-slick design-slick tab-menu on" data-tab="#tab01">
                            <div className="pager">
                                <span className="prev-wrap">
                                    <div className="prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.573" height="60.146" viewBox="0 0 30.573 60.146">
                                            <g id="group_14307" data-name="group_14307" transform="translate(1.5 -94.427)">
                                                <path id="path_60777" data-name="path 60777" d="M3784,3752l-18,27.96,18,28.04" transform="translate(-3766 -3655.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                <path id="path_60778" data-name="path 60778" d="M3784,3752l-18,27.96,18,28.04" transform="translate(-3757 -3655.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                            </g>
                                        </svg>                                      
                                    </div>
                                </span>
                                <span className="next-wrap">
                                    <div className="next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.573" height="60.146" viewBox="0 0 30.573 60.146">
                                            <g id="group_14306" data-name="group_14306" transform="translate(-1764.927 -3749.927)">
                                                <path id="path_60777" data-name="path 60777" d="M3766,3752l18,27.96L3766,3808" transform="translate(-1990)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                <path id="path_60778" data-name="path 60778" d="M3766,3752l18,27.96L3766,3808" transform="translate(-1999)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                            </g>
                                        </svg>                                      
                                    </div>
                                </span>
                            </div>
                            <div className="device-container">
                                <div className="ipad">
                                    <div className="mockup">
                                        <img src="/img/ipad-Mockup.png" width="794px" height="610px" />
                                    </div>
                                    <div className="display">
                                        <ul className="display-list">
                                            <li className="display-item"><img src="/img/cover/design-pf-01.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-02.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-03.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-04.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-05.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-06.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-07.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-08.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/cover/design-pf-09.png" className="item" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="iphone">
                                    <div className="mockup">
                                        <img src="/img/iphone-Mockup.png" width="230px" height="490px" />
                                        <div className="box"></div>
                                    </div>
                                    <div className="display">
                                        <ul className="display-list">
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-01.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-02.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-03.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-04.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-05.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-06.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-07.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-08.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/mob-cover/dev-pf-09.png" className="item" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="modal design-modal1">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/01/design-pf-01-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/01/design-pf-01-03.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/01/design-pf-01-04.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/01/design-pf-01-05.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/01/design-pf-01-06.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/01/design-pf-01-07.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal2">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/02/design-pf-02-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/02/design-pf-02-03.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/02/design-pf-02-04.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/02/design-pf-02-05.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal3">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/03/design-pf-03-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/03/design-pf-03-03.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/03/design-pf-03-04.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/03/design-pf-03-05.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/03/design-pf-03-06.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal4">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/04/design-pf-04-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/04/design-pf-04-03.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/04/design-pf-04-04.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal5">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/05/design-pf-05-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/05/design-pf-05-03.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/05/design-pf-05-04.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal6">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/06/design-pf-06-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/06/design-pf-06-03.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/06/design-pf-06-04.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal7">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/07/design-pf-07-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/07/design-pf-07-03.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal8">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/08/design-pf-08-02.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/08/design-pf-08-03.png" className="item" /></li>
                                            <li className="modal-item"><img src="/img/modal-cont/08/design-pf-08-04.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal design-modal9">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/modal-cont/09/design-pf-09-02.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="tab02" className="device-slick dev-slick tab-menu" data-tab="#tab02">
                            <div className="pager">
                                <span className="prev-wrap">
                                    <div className="prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.573" height="60.146" viewBox="0 0 30.573 60.146">
                                            <g id="group_14307" data-name="group_14307" transform="translate(1.5 -94.427)">
                                                <path id="path_60777" data-name="path 60777" d="M3784,3752l-18,27.96,18,28.04" transform="translate(-3766 -3655.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                <path id="path_60778" data-name="path 60778" d="M3784,3752l-18,27.96,18,28.04" transform="translate(-3757 -3655.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                            </g>
                                        </svg>                                      
                                    </div>
                                </span>
                                <span className="next-wrap">
                                    <div className="next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.573" height="60.146" viewBox="0 0 30.573 60.146">
                                            <g id="group_14306" data-name="group_14306" transform="translate(-1764.927 -3749.927)">
                                                <path id="path_60777" data-name="path 60777" d="M3766,3752l18,27.96L3766,3808" transform="translate(-1990)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                <path id="path_60778" data-name="path 60778" d="M3766,3752l18,27.96L3766,3808" transform="translate(-1999)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                            </g>
                                        </svg>                                      
                                    </div>
                                </span>
                            </div>
                            <div className="device-container">
                                <div className="imac">
                                    <div className="mockup">
                                        <img src="/img/imac-Mockup.png" width="832px" height="700px" />
                                    </div>
                                    <div className="display">
                                        <ul className="display-list">
                                            <li className="display-item"><img src="/img/naver.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/hyundaiCard.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/ex.png" className="item" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ipad">
                                    <div className="mockup">
                                        <img src="/img/ipad-Mockup.png" width="468px" height="366px" />
                                    </div>
                                    <div className="display">
                                        <ul className="display-list">
                                            <li className="display-item"><img src="/img/naver.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/hyundaiCard.png" className="item" /></li>
                                            <li className="display-item"><img src="/img/ex.png" className="item" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="modal dev-modal1">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/naver.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal dev-modal2">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/hyundaiCard.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal dev-modal3">
                                <div className="modal-window">
                                    <div className="modal-area">
                                        <ul className="modal-list">
                                            <li className="modal-item"><img src="/img/ex.png" className="item" /></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="close-button">
                                        <span className="close-button-item">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionPortfolio>
    )
}

export default SectionPortfolioWrap;