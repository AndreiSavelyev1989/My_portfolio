import style from "./MessageMe.module.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import { Loader } from "../../common/components/loader/Loader";

export const MessageMe = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef: any = useRef();

  useEffect(() => {
    let timeoutId: any = null;
    if (isSuccess || isError) {
      timeoutId = setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSuccess, isError]);

    const sendEmail = (e: any) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_scbve5v",
          "template_fv7i9rw",
          formRef.current,
          "mpmTmPw53yiw11l-a"
        )
        .then(
          (result) => {
            console.log(result);

            setIsLoading(false);
            setIsSuccess(true);
          },
          (error) => {
            console.log(error);
            setIsLoading(false);
            setIsError(true);
          }
        );
    };

  return (
    <div className={style.messageMeBlock}>
      <div className={style.messageMeWrapper}>
        <h4 className={style.title}>Message Me</h4>
        <form ref={formRef} className={style.form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder={"Please enter your name"}
            name="user_name"
          />
          <input
            type="email"
            placeholder={"Please enter your e-mail"}
            name="user_email"
          />
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder={"Your message"}
          />
          <div className={style.submitWrapper}>
            {isLoading ? (
              <Loader />
            ) : (
              <input
                type="submit"
                className={style.button}
                value="SEND MESSAGE"
              />
            )}
            {isSuccess && (
              <div className={style.succesWrapper}>
                <AiOutlineCheckCircle />
                <span className={style.success}>Successfully sent!</span>
              </div>
            )}
            {isError && (
              <div className={style.errorWrapper}>
                <MdReportGmailerrorred />
                <span className={style.error}>Something went wrong!</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
