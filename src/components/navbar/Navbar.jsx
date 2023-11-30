import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <img className={style.logo} src="./images/instalogo.png" alt="" />
      </div>
      <div>
        <img src="./images/navbar/home.png" alt=""/>
        <img src="./images/navbar/message.png" alt="" />
        <img src="./images/navbar/search.png" alt="" />
        <img src="./images/navbar/like.png" alt="" />
        <img className={style.pfpImg} src="./images/default_pfp.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
