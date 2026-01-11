// import { useState } from 'react'

import styles from "./App.module.css";

export const App = () => {
  
  return (
    <>
      <div className={styles.container}>
        <h2>Регистрация нового пользователя</h2>
        <form className={styles.form} noValidate>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              className={styles.input}
            />
            {<p className={styles.error}></p>}
          </label>

          <label className={styles.label}>
            Пароль:
            <input
              type="password"
              name="password"
              className={styles.input}
            />
            {<p className={styles.error}></p>}
          </label>

          <label className={styles.label}>
            Повторите пароль:
            <input
              type="password"
              name="confirmPassword"
              className={styles.input}
            />
            {<p className={styles.error}></p>}
          </label>

          <button type="submit" className={styles.button}>Зарегистрироваться</button>
          
        </form>
      </div>
    </>
  );
};
