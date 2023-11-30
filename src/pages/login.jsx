import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import style from "@/styles/login.module.scss";
import Head from "next/head";

const Login = () => {
  const [error, setError] = useState({});
  const inputRef = useRef();
  const { push } = useRouter();

  // console.log(inputRef);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // console.log(inputRef.current.value);

      localStorage.setItem("username", inputRef.current.value);
      inputRef.current.value = "";

      push("/");
    }
  };

  useEffect(() => {
    // console.log(typeof localStorage.getItem("error"));

    if (localStorage.getItem("error") == 200) {
      // console.log("error is present");

      setError("Server is down atm");
    }
  }, []);

  const displayError = () => {
    if (error !== "") {
      return <h2>error</h2>;
    }
  };

  // const getClassname = () => {
  //   let finalClassname = `${style.title} `;
  //   if (error !== "") {
  //     finalClassname += `${style.error} `;
  //   }

  //   return finalClassname;
  // };

  return (
    <>
    <Head>
      <title>Chat Next.js - Connexion </title>
      <link rel="shortcut icon" href="./logo_insta.png" type="image/x-icon" />
    </Head>
    <section>
      <main>
        <article className={style.loginSection}>
          <div className={style.phoneContainer}>
            <div className={style.phoneScreen}>
              <img className={style.screenshot_1} src="./images/screenshot1.png" alt="" />
              <img className={style.screenshot_2} src="./images/screenshot2.png" alt="" />
              <img className={style.screenshot_3} src="./images/screenshot3.png" alt="" />
              <img className={style.screenshot_4} src="./images/screenshot4.png" alt="" />
            </div>
          </div>
          <div className={style.loginContainer}>
            <div className={style.loginContent}>
              <img className={style.instalogo} src="./images/instalogo.png" alt="" />
              <div className={style.inputContainer}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Nom d'utilisateur"
                  onKeyDown={onKeyDown}
                />
              </div>
              {displayError()}
            </div>
          </div>
        </article>
      </main>
      <footer>
        <div>
          <div>
            <div>{footerContentTop.map((content) => {})}</div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </footer>
    </section>
    </>
  );
};

export default Login;
