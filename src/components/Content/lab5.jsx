import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Lab5 = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = useCallback(async (data) => {
    try {
      await axios.post("http://localhost:3002/data", data);
      setIsRegistered(true);
      reset();
      alert("Данные успешно отправлены на сервер!");
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  }, [reset]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <div>
      <h2>Форма регистрации</h2>
      {isRegistered && <p>Пользователь успешно зарегистрирован!</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя</label>
          <input type="text" {...register("firstName", { required: true })} />
          {errors.firstName && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label>Фамилия</label>
          <input type="text" {...register("lastName", { required: true })} />
          {errors.lastName && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>Это поле обязательно</span>}
        </div>
        <button type="submit">Зарегистрироваться</button>
        <button type="button" onClick={handleReset}>Очистить</button>
      </form>
    </div>
  );
};

export default Lab5;
