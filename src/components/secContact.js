import { useState } from "react";
import { SectionContact } from "../styles/common/secContact.styles";


const SectionContactWrap = () => {

    const [ loadingModalVisible, setLoadingModalVisible ] = useState(false);

    const sendFormData = async (event) => {
        event.preventDefault();

        setLoadingModalVisible(true);

        // 기존 z-index 값 저장
        const contactTalkZindex = document.querySelector('.contact-talk').style.zIndex;
        const contactInTouchZindex = document.querySelector('.contact-inTouch').style.zIndex;

        // 동일한 z-index 값을 설정
        document.querySelector('.contact-talk').style.zIndex = 0;
        document.querySelector('.contact-inTouch').style.zIndex = 0;

        const formData = new FormData(document.getElementById('contact-form'));

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyUAJpDK1FXU3HY91E9U8esrqfYvvEbY65FfDsT2SJDkJiJjKSZGGXZh8EM8eiUW7Am8Q/exec', {
              method: 'POST',
              body: formData
            });
        
            const data = await response.json();
        
            // 성공 처리 코드
            console.log(data);
            alert('보내졌습니다!');
            document.getElementById('contact-form').reset(); // 폼 초기화
        
          } catch (error) {
            // 에러 처리 코드
            console.error(error);
            alert('전송 오류가 발생했습니다. 다시 시도해주세요.');
          }
        
          // 모달 창이 숨겨진 후 원래의 z-index 값으로 복구
          document.querySelector('.contact-talk').style.zIndex = contactTalkZindex;
          document.querySelector('.contact-inTouch').style.zIndex = contactInTouchZindex;
        
          setLoadingModalVisible(false); // 로딩 모달 숨기기
        };

    return(
        <SectionContact id="contact" className="contact">
            <div className="title">
                <div className="title-num">04</div>
                <div className="title-txt">Contact</div>
            </div>
            <div className="contents">
                <div className="contact-talk">
                    <div className="status-bar">
                        <div className="ellipse">
                            <div className="el-1st"></div>
                            <div className="el-2nd"></div>
                            <div className="el-3rd"></div>
                        </div>
                    </div>
                    <div className="contact-main">
                        <div className="title-mid">Let's Talk</div>
                        <div className="talk-info">
                            <div className="talk-style">
                                <div className="talk-title">My Work Style</div>
                                <ul className="style-list">
                                    <li className="style-item">ENFP - T 🪇</li>
                                    <li className="style-item">따뜻하고 정열적이며, 재능 많고 상상력이 풍부한 재기발랄한 활동가 🥁</li>
                                    <li className="style-item">평소에는 차분하고 일할때는 j성향이 강해져서 계획적으로 변해요! 📝</li>
                                    <li className="style-item">맡은 일에 책임감이 있어서 끝까지 놓지않고 해결해나가요 📔</li>
                                    <li className="style-item">배우고싶은게 많아요(언어에 대한 욕심이 많아요) 📚</li>
                                </ul>
                            </div>
                            <div className="talk-line"></div>
                            <div className="talk-keyword">
                                <div className="talk-title">Keyword</div>
                                <ul className="keyword-list">
                                    <li className="keyword-item">#ENFP</li>
                                    <li className="keyword-item">#꼼꼼함</li>
                                    <li className="keyword-item">#성실함</li>
                                    <li className="keyword-item">#호기심</li>
                                    <li className="keyword-item">#활동적</li>
                                    <li className="keyword-item">#긍정적</li>
                                    <li className="keyword-item">#열정적</li>
                                    <li className="keyword-item">#공감능력</li>
                                    <li className="keyword-item">#멀티태스킹</li>
                                    <li className="keyword-item">#위기대처능력</li>
                                    <li className="keyword-item">#자아성찰</li>
                                    <li className="keyword-item">#다양한 관심사</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-inTouch">
                    <div className="status-bar">
                        <div className="ellipse">
                            <div className="el-1st"></div>
                            <div className="el-2nd"></div>
                            <div className="el-3rd"></div>
                        </div>
                    </div>
                    <div className="contact-main">
                        <div className="title-mid">Get in Touch!</div>
                        <div className="email-form">
                            <form id="contact-form" className="form-area" data-email="example@email.net">
                                <ul className="form-list">
                                    <li className="form-item">
                                        <div className="item-name">
                                            <input type="text" className="uname" name="name" id="uname" placeholder="Your Name" />
                                        </div>
                                    </li>
                                    <li className="form-item">
                                        <div className="item-email">
                                            <input type="email" className="uemail" name="email" id="uemail" placeholder="Your Email" />
                                        </div>
                                    </li>
                                    <li className="form-item">
                                        <div className="item-msg">
                                            <textarea type="text" className="umsg" name="msg" placeholder="Typing Your Message Here" ></textarea>
                                        </div>
                                    </li>
                                </ul>
                                <button onClick={sendFormData} className="sendBtn" >Send Me!</button>
                            </form>
                            <iframe name="frAttachFiles" style="display: none;"></iframe>
                            <div id="loading-modal" className="loading-modal">
                                <div className="modal-content">
                                    <i className="xi-spinner-4 xi-spin xi-4x"></i>
                                    <p>Loading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContact>
    );
}

export default SectionContactWrap;