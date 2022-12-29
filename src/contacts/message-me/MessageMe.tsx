import style from "./MessageMe.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import { Loader } from "../../common/components/loader/Loader";

export const MessageMe = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [mailData, setMailData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
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
    if (
      mailData.user_name.length &&
      mailData.user_email.length &&
      mailData.message.length
    ) {
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
            setMailData({
              user_name: "",
              user_email: "",
              message: "",
            });
            setIsLoading(false);
            setIsSuccess(true);
            setIsValid(true);
          },
          (error) => {
            console.log(error);
            setIsLoading(false);
            setIsError(true);
          }
        );
    } else {
      setIsValid(false);
    }
  };

  const onFocusValidationCheck = () => {
    if (
      !mailData.message.length ||
      !mailData.user_email.length ||
      !mailData.user_name.length
    ) {
      setIsValid(false);
    }
  };

  const validationErrorTextHandler = () => {
    if (
      (!isValid && !mailData.user_name.length) ||
      (!isValid && !mailData.user_email.length) ||
      (!isValid && !mailData.message.length)
    ) {
      return (
        <div className={style.errorWrapper}>
          <MdReportGmailerrorred />
          <span className={style.error}>Please fill in all text fields!</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={style.messageMeBlock}>
      <div className={style.messageMeWrapper}>
        <h4 className={style.title}>Message Me</h4>
        <form ref={formRef} className={style.form} onSubmit={sendEmail}>
          <input
            type="text"
            value={mailData.user_name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMailData({
                user_name: e.target.value,
                user_email: mailData.user_email,
                message: mailData.message,
              })
            }
            onBlur={onFocusValidationCheck}
            className={
              !isValid && !mailData.user_name.length
                ? style.validationError
                : undefined
            }
            placeholder={"Please enter your name"}
            name="user_name"
          />
          <input
            type="email"
            value={mailData.user_email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMailData({
                user_name: mailData.user_name,
                user_email: e.target.value,
                message: mailData.message,
              })
            }
            onBlur={onFocusValidationCheck}
            className={
              !isValid && !mailData.user_email.length
                ? style.validationError
                : undefined
            }
            placeholder={"Please enter your e-mail"}
            name="user_email"
          />
          <textarea
            value={mailData.message}
            onChange={(e) =>
              setMailData({
                user_name: mailData.user_name,
                user_email: mailData.user_email,
                message: e.target.value,
              })
            }
            onBlur={onFocusValidationCheck}
            className={
              !isValid && !mailData.message.length
                ? style.validationError
                : undefined
            }
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
            {validationErrorTextHandler()}
          </div>
        </form>
      </div>
    </div>
  );
};
