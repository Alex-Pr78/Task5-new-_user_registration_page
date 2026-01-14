import { useState } from "react";
import styles from "./App.module.css";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const useStore = () => {
  const [state, setState] = useState(initialState);

  return {
    getState: () => state,
    updateState: (filedName, newValue) => {
      setState({ ...state, [filedName]: newValue });
    },
  };
};

const sendData = (formData) => {
  console.log(formData);
};

export const App = () => {
  const { getState, updateState } = useStore();

  const onSubmit = (event) => {
    event.preventDefault();

    sendData(getState());
  };

  const { email, password, confirmPassword } = getState();

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
              onChange={({ target }) => updateState("email", target.value)}
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
              onChange={({ target }) => updateState("password", target.value)}
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
              onChange={({ target }) =>
                updateState("confirmPassword", target.value)
              }
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
