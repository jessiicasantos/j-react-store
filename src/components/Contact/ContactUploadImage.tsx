import { useRef } from "react";
import axios from "axios";

const ContactUpload = () => {
  const formRef: any = useRef();
  
  const onSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    axios
      .post("your-endpoint-url", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <label>
        Name:
        <input name="name" />
      </label>
      <br />
      <label>
        Picture:
        <input name="picture" type="file" accept="image/jpeg, image/png" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUpload;