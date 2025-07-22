import { useForm } from "react-hook-form";
import { newsLetter } from "../../data.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationSchema } from "../../validation/userValidation";
import "./Newsletter.css";

const Newsletter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userValidationSchema)
  });

  const onSubmit = (data: any) => {
    // axios
    console.log(data)
  };

  return (
    <>
    {newsLetter.map((n: any, i: number) => (
      <div key={`n-${i}`} className="newsletter">
        <div className="left">
          <img src={n.imgs[0].src} alt={n.imgs[0].src} />
        </div>
        <div className="center">
          <h3>{n.title}</h3>
          <p>
            {n.text}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
              <input id="email" type="email" placeholder="Email address" {...register("email", { required: true })} />
            </label>
            <p>{errors.email?.message}</p>
            
            <button
              type="submit"
              className="btn-orange"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="right">
          <img src={n.imgs[1].src} alt={n.imgs[1].src} />
        </div>
      </div>
    ))}
    </>
  )
}

export default Newsletter;