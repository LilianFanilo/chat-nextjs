import { useEffect, useRef } from "react";
import style from "./Message.module.scss";
import { gsap } from "gsap";

const Message = ({ username, content, fromSelf }) => {
  const messageRef = useRef();

  useEffect(() => {
    gsap.fromTo(messageRef.current, {
      opacity: 0,
      x: 10,
    },{
      opacity: 1,
      x: 0,
    });
  });

  if (!fromSelf) {
    return (
      <div className={style.usersMessages}>
        <img src="./images/default_pfp.svg" alt="" />
          <div
          ref={messageRef}
          className={`${style.message}`}
        >
          <span>
            {username} : {content}
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <div
      ref={messageRef}
      className={`${style.message} ${style.message__self}`}
    >
      <span>
        {username} : {content}
      </span>
    </div>
    )
  }
};

export default Message;
