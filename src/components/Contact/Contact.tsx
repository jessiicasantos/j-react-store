import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userValidationSchema } from "../../validation/userValidation";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import ContactUpload from "./ContactUpload";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userValidationSchema)
  });
  
  const onSubmit = (data: any) => {
    data.preventDefault();
    
    console.log(data);
  };
  
  return (
    <div className="contact-us container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper">
          <div className="two-cols">
            <label id="firstname" htmlFor="firstname">
              First Name:
              <input type="text" {...register("firstname")} />
              <p>{errors.firstname?.message}</p>
            </label>
          </div>
          <div className="two-cols">
            <label id="lastname" htmlFor="lastname">
              Last Name:
              <input type="text" {...register("lastname")} />
              <p>{errors.lastname?.message}</p>
            </label>
          </div>

          <div className="three-cols">
            <label id="email" htmlFor="email">
              Email address:
              <input type="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </label>
          </div>
          <div className="three-cols">
            <label id="phone" htmlFor="phone">
              Phone:
              <input type="tel" {...register("phone")} />
              <p>{errors.phone?.message}</p>
            </label>
          </div>
          <div className="subject three-cols">
            <label htmlFor="subject">
              Subject
              <div className="select-wrapper">
                <select id="subject" {...register("subject")}>
                  <option value="subject1">Subject 1</option>
                  <option value="subject2">Subject 2</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                />
              </div>
              <p>{errors.subject?.message}</p>
            </label>
          </div>

          <div className="one-col">
            <label htmlFor="message">
              Message:
              <textarea id="message" {...register("message")} rows={4} />
              <p>{errors.message?.message}</p>
            </label>
          </div>

          <ContactUpload />

          <fieldset className="agree-wrapper">
            <div>
              <div className="check-wrapper group">
                <input
                  id="contact-agreement"
                  name="contact-agreement"
                  type="checkbox"
                  aria-describedby="contact-agreement-description"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-checked:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-indeterminate:opacity-100"
                  />
                </svg>
              </div>
              <label id="contact-description">
                I agree to be contacted by email or phone.
              </label>
              {/* <p>{errors.upload?.message}</p> */}
            </div>
          </fieldset>
        </div>

        <div className="cancel">
          <button type="button" className="text-sm/6 font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="save"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;