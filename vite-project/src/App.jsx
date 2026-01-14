import { useState } from "react";
import { RegisterForm } from "./Components/RegisterForm";
import { useStore, sendData } from "./Components/useFormStore"

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
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Неверный формат email";
    }

    if (formData.password.length < 6) {
      validationErrors.password = "Пароль должен быть не менее 6 символов";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(validationErrors);

    // Если в объекте validationErrors нет ошибок
    if (Object.keys(validationErrors).length === 0) {
      sendData(formData); // отправляет данные формы
    }
  };

  const resetState = () => {
    resetStoreState();
    setErrors({});
  };

  const formData = getState();
  const isFormValid =
    Object.keys(errors).length === 0 &&
    formData.email &&
    formData.password &&
    formData.confirmPassword;

  return (
    <RegisterForm
      formData={formData}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      onReset={resetState}
      isFormValid={isFormValid}
    />
  );
};
