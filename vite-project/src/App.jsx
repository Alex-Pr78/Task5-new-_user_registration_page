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
    updateState: (fieldName, newValue) => {
      setState({ ...state, [fieldName]: newValue });
    },
    resetState: () => {
      setState(initialState);
    },
  };
};

const sendData = (formData) => {
  console.log(formData);
};

export const App = () => {
  const { getState, updateState, resetState: resetStoreState } = useStore();
  const [errors, setErrors] = useState({});

  const onChange = ({ target }) => {
    updateState(target.name, target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = getState();
    
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Неверный формат email";
    }

    if (!formData.password) {
      validationErrors.password = "Пароль обязателен";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Пароль должен быть не менее 6 символов";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Подтвердите пароль";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      sendData(formData);
    }
  };

  const resetState = () => {
    resetStoreState();
    setErrors({});
  };

  const { email, password, confirmPassword } = getState();
  const isFormValid =
    Object.keys(errors).length === 0 && email && password && confirmPassword;

  return (
    <div className={styles.container}>
      <h2>Регистрация</h2>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            className={styles.input}
            onChange={onChange}
            autoComplete="email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </label>

        <label className={styles.label}>
          Пароль:
          <input
            type="password"
            name="password"
            value={password}
            className={styles.input}
            onChange={onChange}
            autoComplete="new-password"
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </label>

        <label className={styles.label}>
          Повторите пароль:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            className={styles.input}
            onChange={onChange}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}
        </label>
        <button type="submit" disabled={!isFormValid} className={styles.button}>
          Зарегистрироваться
        </button>
        <button type="button" onClick={resetState} className={styles.button}>
          Сброс
        </button>
      </form>
    </div>
  );
};
