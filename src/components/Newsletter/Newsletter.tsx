import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidationSchema } from "../../validation/fieldsValidation";
import "./Newsletter.css";
import axios from "axios";
import { useNotification } from "../NotificationContext/NotificationContext";
import { useFetch } from "../../hooks/useFetch";

interface NewsletterType {
  tag?: string;
  title?: string;
  text?: string;
  hrefText?: string;
  href?: string;
  email?: string;
  imgs?: {
    src: string;
    alt: string;
  }[];
}

const Newsletter = () => {
  const newsletterData = useFetch<NewsletterType[]>('newsletter');
  const { setNotification } = useNotification();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(emailValidationSchema)
  });

  const onSubmit = async (data: NewsletterType) => {
    try {
      const response = await axios.post("http://localhost:5000/api/email", {
        email: data.email
      });

      setNotification({ message: 'Subscribe success!', type: 'success' });
    } catch(error) { 
      console.error('Erro no envio: ', error);
      setNotification({ message: 'Error', type: 'error' });
    }
  };

  return (
    <>
      {newsletterData?.map((n: NewsletterType, i: number) => (
        <div key={`n-${i}`} className="newsletter">
          <div className="left">
            <img src={n?.imgs?.[0]?.src} alt={n?.imgs?.[0]?.src} />
          </div>
          <div className="center">
            <h3>{n.title}</h3>
            <p>
              {n.text}
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label id="emailNews" htmlFor="email">
                <input type="email" placeholder="Email address" {...register("email")} />
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
            <img src={n?.imgs?.[1]?.src} alt={n?.imgs?.[1]?.src} />
          </div>
        </div>
      ))}
    </>
  )
}

export default Newsletter;