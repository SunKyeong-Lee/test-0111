import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [text, setText] = useState("값을 작성합니다");

  const onChangeHandle = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.main}>
      <h2>about 페이지 입니다</h2>
      <p>아래 input에 값을 넣으면 값이 바뀝니다</p>
      <p>: {text}</p>
      <input type="text" value={text} onChange={onChangeHandle} />

      <br />
      <br />
      <Link href="/">메인 페이지로 이동</Link>
    </div>
  );
};

export default About;
