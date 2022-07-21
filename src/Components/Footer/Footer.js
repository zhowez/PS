import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div div className={style["footer-box"]}>
      <p>© 2022 James Z. Howes. All rights reserved.</p>
      <div>
        <a href="https://github.com/zhowez">
          <GithubOutlined /> Check Out My Github
        </a>
        <a href="https://github.com/zhowez">
          <LinkedinOutlined /> Let's Connect!
        </a>
      </div>
    </div>
  );
};

export default Footer;
