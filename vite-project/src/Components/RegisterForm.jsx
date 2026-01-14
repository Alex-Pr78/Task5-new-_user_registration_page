import styles from "./RegisterForm.module.css";

export const RegisterForm = ({
  formData,
  errors,
  onChange,
  onSubmit,
  onReset,
  isFormValid,
}) => (
  <>
    <div className={styles.container}>
      <h2>Регистрация</h2>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
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
            value={formData.confirmPassword}
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
        <button type="button" onClick={onReset} className={styles.button}>
          Сброс
        </button>
      </form>
    </div>
  </>
);
