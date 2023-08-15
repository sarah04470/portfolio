import styled from "@emotion/styled";

export const SectionContact = styled.section`
    width: 100%; padding-bottom: 80px;

    & .title{ padding-top: 60px; }
    & .contents{ display: block; position: relative; min-height: 1000px; }
    & .contents .contact-talk{ width: 40%; max-width: 640px; min-width: 420px; box-shadow: 0 10px 18px 0 rgba(0,0,0,0.15); border-radius: 20px; background-color: #fff; margin: 0 auto; z-index: 1; position: absolute; right: calc(50%); top: calc(50% - 320px); }
    & .contents .contact-talk .status-bar{ height: 40px; border-radius: 20px 20px 0 0; }
    & .contents .contact-talk .contact-main{ display: flex; flex-direction: column; gap: 70px; padding: 52px 0; }
    & .contents .contact-talk .contact-main .title-mid{ font-size: 3.75rem; font-weight: 900; color: rgba(0,0,0, 0.25); padding: 0 70px; }

    & .contents .contact-talk .contact-main .talk-info{ display: flex; flex-direction: column; gap: 40px; width: 80%; margin: 0 auto; cursor: default; }
    & .contents .contact-talk .contact-main .talk-info .talk-title{ font-size: 1rem; font-weight: 700; color: #333; }
    & .contents .contact-talk .contact-main .talk-info .talk-style{ display: flex; flex-direction: column; gap: 30px; }
    & .contents .contact-talk .contact-main .talk-info .talk-style .style-list{ display: flex; flex-direction: column; gap: 10px; }
    & .contents .contact-talk .contact-main .talk-info .talk-style .style-list .style-item{ font-size: 12px; }
    & .contents .contact-talk .contact-main .talk-info .talk-line{ width: 100%; height: 1.8px; background-color: #ccc; border-radius: 2px; }
    & .contents .contact-talk .contact-main .talk-info .talk-keyword{ display: flex; flex-direction: column; gap: 30px; }
    & .contents .contact-talk .contact-main .talk-info .talk-keyword .keyword-list{ display: flex; flex-direction: row; gap: 10px; flex-wrap: wrap; }
    & .contents .contact-talk .contact-main .talk-info .talk-keyword .keyword-list .keyword-item{ padding: 5px 8px; font-size: 12px; font-weight: 500; color: #333; border: 1.2px solid #226eba; border-radius: 40px; transition: all 0.3s; }
    & .contents .contact-talk .contact-main .talk-info .talk-keyword .keyword-list .keyword-item:hover{ background-color: #11589e; color: #fff; font-weight: 700; animation: shaking 0.3s; box-shadow: 0 2.5px 4.5px 0 rgba(0,0,0,0.2); }

    & .contents .contact-inTouch{ width: 50%; max-width: 740px; min-width: 540px; height: 920px; box-sizing: border-box; box-shadow: 0 10px 18px 0 rgba(0,0,0,0.15); border-radius: 20px; background-color: #fff; margin: 0 auto; z-index: 0; position: absolute; left: calc(50% - 80px); }
    & .contents .contact-inTouch .status-bar{  height: 40px; border-radius: 20px 20px 0 0; }
    & .contents .contact-inTouch .contact-main{ display: flex; flex-direction: column; gap: 70px; padding: 52px 0; }
    & .contents .contact-inTouch .contact-main .title-mid{ font-size: 3.75rem; font-weight: 900; color: rgba(0,0,0, 0.25); padding: 0 70px; }
    & .contents .contact-inTouch .contact-main .email-form{ width: 80%; height: 100%; margin: 0 auto; position: relative; }
    & .contents .contact-inTouch .contact-main .email-form .form-area{ width: 100%; display: flex; flex-direction: column; align-items: flex-end; gap: 30px; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list{ width: 92%; display: flex; flex-direction: column; gap: 30px; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item{  }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item input,
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item textarea{ outline: none; border: none; border-radius: 12px; background-color: #f4f4f4; box-shadow: inset 0 5px 12px 0 rgba(0,0,0,0.12); padding: 0 30px; font-size: 1.25rem; font-weight: 700; color: #777; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item textarea{ padding: 12px 30px; resize: none; scrollbar-width: thin; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item input::placeholder,
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item textarea::placeholder{ color: rgba(0,0,0, 0.3); font-size: 1.25rem; font-weight: 700; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item .item-name{  }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item .item-name .uname{ width: 100%; max-width: 540px; min-width: 320px; height: 52px; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item .item-email{  }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item .item-email .uemail{ width: 100%; max-width: 540px; min-width: 320px; height: 52px; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item .item-msg{  }
    & .contents .contact-inTouch .contact-main .email-form .form-area .form-list .form-item .item-msg .umsg{ width: 100%; max-width: 540px; min-width: 320px; height: 400px;  }
    & .contents .contact-inTouch .contact-main .email-form .form-area .sendBtn{ outline: none; border: none; border-radius: 12px; background-color: #f4f4f4; width: 30%; max-width: 175px; min-width: 130px; height: 52px; font-size: 1.25rem; font-weight: 700; color: rgba(0,0,0, 0.2); transition: all 0.3s; }
    & .contents .contact-inTouch .contact-main .email-form .form-area .sendBtn:hover{ background-color: #e5eaf3; color: rgba(100, 117, 159, 0.7); animation: shaking 0.3s; box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15); }
    & .contents .contact-inTouch .contact-main .email-form .loading-modal{ display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 5; }
    & .contents .contact-inTouch .contact-main .email-form .loading-modal .modal-content{ display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 10px; background-color: #fff; padding: 20px; border-radius: 10px; text-align: center; }
    & .contents .contact-inTouch .contact-main .email-form .loading-modal .modal-content p{ font-size: 12px; font-weight: 500; padding-left: 3px; }
    & .contents .contact-inTouch .contact-main .email-form .loading-modal .modal-content .xi-spin{ color: #084785; }
`;