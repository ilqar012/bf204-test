import React from "react";
import styles from "./index.module.css";
import { FiPhone } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { PiBag } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <header>
      <div className={styles.topDiv}>
        <div className={`${styles.container} ${styles.topDivCon}`}>
          <div className={styles.phone}>
            <FiPhone style={{ color: "white", fontSize: "14px" }} />
            <a href="tel:+748 383 23 14">+748 383 23 14</a>
          </div>
          <ul className={styles.containerUl}>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li className={styles.borderLi}>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Customer service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.headerLayout}>
        <div className={`${styles.container} ${styles.headerLayoutCon}`}>
          <h1>ChicCharry</h1>
          <div className={styles.form}>
            <form>
              <input type="text" placeholder="Search all products" />
            </form>
            <div className={styles.icon}>
            <CiSearch style={{}}/>
            </div>

          </div>
          <ul className={styles.headerLayoutUl}>
            <li>
              <BsPerson style={{ fontSize: "24px", marginRight: "5px" }} />
              <a href="#">Sign up</a>
            </li>
            <li>
              <CiHeart style={{ fontSize: "24px", marginRight: "5px" }} />
              <a href="#">Wishlist</a>
            </li>
            <li>
              <PiBag style={{ fontSize: "24px", marginRight: "5px" }} />
              <a href="#">Basket</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
