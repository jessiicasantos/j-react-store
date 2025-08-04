import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ReactHookForm = () => {
const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div>
      <h1>React Hook Form</h1>
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>E-mail
          <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <p className="text-red-600">E-mail is required and must be valid</p>}
        </label>
        <label>
          Password
          <input type="password" {...register("password", { required: true })} />
          {errors.password && <p>Password is required</p>}

          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default ReactHookForm;
