import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, Resolver, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { contactValidationSchema } from "../../validation/fieldsValidation";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import "./Contact.css";
import axios from "axios";
import { useNotification } from "../../components/NotificationContext/NotificationContext";
import ContactUpload from "../../components/ContactUpload/ContactUpload";

export interface ContactUploadType {
  register: UseFormRegister<ContactType>;
  errors: FieldErrors<ContactType> & {
    upload?: {
      message?: string;
    }
  };
}

interface ContactType {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  upload: FileList | undefined;
  contactAgreement: boolean | undefined;
}

const Contact = () => {
  const { setNotification } = useNotification();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactType>({
    resolver: yupResolver(contactValidationSchema) as Resolver<ContactType>
  });

  const onSubmit: SubmitHandler<ContactType> = async (data) => {
    try {
      const formData = new FormData();

      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("contactAgreement", data.contactAgreement ? "true" : "false");
      
      if(data.upload?.[0]) {
        formData.append("upload", data.upload[0]);        
      }
      
      const response = await axios.post("http://localhost:5000/api/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setNotification({ message: 'Success!', type: 'success' });
    } catch(error) {
      console.error("Erro no envio: ", error);
      setNotification({ message: 'Error', type: 'error' });
    }
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

          <ContactUpload register={register} errors={errors} />

          <div className="agree">
            <fieldset className="agree-wrapper">
              <div>
                <div className="check-wrapper group">
                  <input
                    id="contactAgreement"
                    {...register("contactAgreement")}
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
              </div>
              <div>
              </div>
            </fieldset>
            <p>{errors.contactAgreement?.message}</p>
          </div>
        </div>

        <div className="cancel">
          <button 
            type="button" 
            onClick={() => reset()}
            className="text-sm/6 font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="save btn-orange"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;