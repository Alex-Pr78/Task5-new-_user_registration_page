import { useState } from "react";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const useStore = () => {
  const [state, setState] = useState(initialState);

  return {
    getState: () => state,
    updateState: (fieldName, newValue) => {
      setState(prev => ({ ...prev, [fieldName]: newValue }));
    },
    resetState: () => {
      setState(initialState);
    },
  };
};

export const sendData = (formData) => {
  console.log("Отправка данных:", formData);
};