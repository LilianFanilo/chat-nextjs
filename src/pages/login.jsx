import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import style from "@/styles/login.module.scss";

const Login = () => {
  const [error, setError] = useState({});
  const inputRef = useRef();
  const { push } = useRouter();

  console.log(inputRef);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(inputRef.current.value);

      localStorage.setItem("username", inputRef.current.value);
      inputRef.current.value = "";

      push("/");
    }
  };

  useEffect(() => {
    console.log(typeof localStorage.getItem("error"));

    if (localStorage.getItem("error") == 200) {
      console.log("error is present");

      setError("Server is down atm");
    }
  }, []);

  const displayError = () => {
    if (error !== "") {
      return <h2>error</h2>;
    }
  };

  const getClassname = () => {
    let finalClassname = `${style.title} `;
    if (error !== "") {
      finalClassname += `${style.error} `;
    }

    return finalClassname;
  };

  const footerContentTop = [
    "Meta",
    "À propos",
    "Blog",
    "Emplois",
    "Aide",
    "API",
    "Confidentialité",
    "Conditions",
    "Lieux",
    "Instagram Lite",
    "Threads",
    "Importation des contacts et non-utilisateurs",
    "Meta Verified",
  ];

  return (
    <section>
      <main>
        <article className={style.loginSection}>
          <div className={style.phoneContainer}>
            <div className={style.phoneScreen}>
              <img src="" alt="" />
            </div>
          </div>
          <div className={style.loginContainer}>
            <div className={style.loginContent}>
              <h1 className={`${getClassname()}`}>Login Page</h1>
              <div className={style.inputContainer}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Nom d'utilisateur"
                  onKeyDown={onKeyDown}
                />
                <input type="text" placeholder="Mot de passe" />
                <button>Se connecter</button>
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
  );
};

export default Login;
