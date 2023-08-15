import { SectionContact } from "../styles/common/secContact.styles";


const SectionContactWrap = () => {
    return(
        <SectionContact id="contact" class="contact">
                <div class="title">
                    <div class="title-num">04</div>
                    <div class="title-txt">Contact</div>
                </div>
                <div class="contents">
                    <div class="contact-talk">
                        <div class="status-bar">
                            <div class="ellipse">
                                <div class="el-1st"></div>
                                <div class="el-2nd"></div>
                                <div class="el-3rd"></div>
                            </div>
                        </div>
                        <div class="contact-main">
                            <div class="title-mid">Let's Talk</div>
                            <div class="talk-info">
                                <div class="talk-style">
                                    <div class="talk-title">My Work Style</div>
                                    <ul class="style-list">
                                        <li class="style-item">ENFP - T 🪇</li>
                                        <li class="style-item">따뜻하고 정열적이며, 재능 많고 상상력이 풍부한 재기발랄한 활동가 🥁</li>
                                        <li class="style-item">평소에는 차분하고 일할때는 j성향이 강해져서 계획적으로 변해요! 📝</li>
                                        <li class="style-item">맡은 일에 책임감이 있어서 끝까지 놓지않고 해결해나가요 📔</li>
                                        <li class="style-item">배우고싶은게 많아요(언어에 대한 욕심이 많아요) 📚</li>
                                    </ul>
                                </div>
                                <div class="talk-line"></div>
                                <div class="talk-keyword">
                                    <div class="talk-title">Keyword</div>
                                    <ul class="keyword-list">
                                        <li class="keyword-item">#ENFP</li>
                                        <li class="keyword-item">#꼼꼼함</li>
                                        <li class="keyword-item">#성실함</li>
                                        <li class="keyword-item">#호기심</li>
                                        <li class="keyword-item">#활동적</li>
                                        <li class="keyword-item">#긍정적</li>
                                        <li class="keyword-item">#열정적</li>
                                        <li class="keyword-item">#공감능력</li>
                                        <li class="keyword-item">#멀티태스킹</li>
                                        <li class="keyword-item">#위기대처능력</li>
                                        <li class="keyword-item">#자아성찰</li>
                                        <li class="keyword-item">#다양한 관심사</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-inTouch">
                        <div class="status-bar">
                            <div class="ellipse">
                                <div class="el-1st"></div>
                                <div class="el-2nd"></div>
                                <div class="el-3rd"></div>
                            </div>
                        </div>
                        <div class="contact-main">
                            <div class="title-mid">Get in Touch!</div>
                            <div class="email-form">
                                <form id="contact-form" class="form-area" data-email="example@email.net">
                                    <ul class="form-list">
                                        <li class="form-item">
                                            <div class="item-name">
                                                <input type="text" class="uname" name="name" id="uname" placeholder="Your Name" />
                                            </div>
                                        </li>
                                        <li class="form-item">
                                            <div class="item-email">
                                                <input type="email" class="uemail" name="email" id="uemail" placeholder="Your Email" />
                                            </div>
                                        </li>
                                        <li class="form-item">
                                            <div class="item-msg">
                                                <textarea type="text" class="umsg" name="msg" placeholder="Typing Your Message Here" ></textarea>
                                            </div>
                                        </li>
                                    </ul>
                                    <button onclick="sendFormData(event);" class="sendBtn" >Send Me!</button>
                                </form>
                                <iframe name="frAttachFiles" style="display: none;"></iframe>
                                <div id="loading-modal" class="loading-modal">
                                    <div class="modal-content">
                                        <i class="xi-spinner-4 xi-spin xi-4x"></i>
                                        <p>Loading</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContact>
    )
}

export default SectionContactWrap;