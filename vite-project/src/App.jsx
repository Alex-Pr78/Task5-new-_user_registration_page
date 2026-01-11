import { useState } from "react";
import styles from "./App.module.css";

const sendData = (formData) => {
  console.log(formData)
};

export const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    sendData({ email, password, confirmPassword });
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Регистрация</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              className={styles.input}
              onChange={({ target }) => setEmail(target.value)}
            />
            {<p className={styles.error}></p>}
          </label>

          <label className={styles.label}>
            Пароль:
            <input
              type="password"
              name="password"
              value={password}
              className={styles.input}
              onChange={({ target }) => setPassword(target.value)}
            />
            {<p className={styles.error}></p>}
          </label>

          <label className={styles.label}>
            Повторите пароль:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              className={styles.input}
              onChange={({ target }) => setConfirmPassword(target.value)}
            />
            {<p className={styles.error}></p>}
          </label>

          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
};
