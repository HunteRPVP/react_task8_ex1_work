import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, submitCount },
  } = useForm({mode: "onTouched"});
  const onSubmit = (data) => console.log(data);
  const name = watch("name");
  const age = watch("age");
  // console.log(errors);
  // console.log(submitCount);
  return (
    <div className="App">
      {submitCount !== 0 && <div>{submitCount}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Имя</label>
        <input
          {...register("name", { required: true, maxLength: 31, minLength: 2 })}
          defaultValue="Вадим"
        />
        {errors.name ? <span>&nbsp;Поле обязательное</span> : <div>{name}</div>}
        <br />
        <label>Возраст</label>
        <input type="number" {...register("age", { min: 7, max: 100, pattern: /\d?\d/ })} defaultValue={0} />
        <select {...register("age", {required: true})}>
          <option value={14}>14</option>
          <option value={21}>21</option>
          <option value={44}>44</option>
          <option value={45}>45</option>
        </select>
        {errors.age ? <span>&nbsp;Значение должно быть от 10 до 99</span> : <div>{age}</div>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
