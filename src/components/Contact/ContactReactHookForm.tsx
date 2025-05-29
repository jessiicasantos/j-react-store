import { useRef } from "react";
import axios from "axios";

const ContactReactHookForm = () => {
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
        <input name="picture" type="file" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactReactHookForm;

// import { useState } from "react";
// // import  { useForm }  from  "react-hook-form";

// const ContactReactHookForm = () => {
//   const [ selectedImage, setSelectedImage ] = useState<FileList | null>(null);

//   return (
//     <div className="contact-us">
//         <h1>Contact Us React Hook Form</h1>

        
//         {selectedImage && (
//                 <div>
//                     <img src={URL.createObjectURL(selectedImage)} width="250px" alt="not found" />
//                     <br /> <br />
//                     <button onClick={() => setSelectedImage(null)}>Remove</button>
//                 </div>
//             )}

//             <br />

//             <input type="file" name="myImage" onChange={(event) => {
//                 setSelectedImage(event.target.files[0]);
//             }} />
//     </div>
//   );
// };

// export default ContactReactHookForm;
