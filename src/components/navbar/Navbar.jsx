import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <img src="./images/instalogo.png" alt="" />
      </div>
      <div>
        <input type="text" name="" id="" />
      </div>
      <div>
        <img src="./images/navbar/home.png" alt=""/>
        <img src="./images/navbar/message.png" alt="" />
        <img src="./images/navbar/search.png" alt="" />
        <img src="./images/navbar/like.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
