import React, { useState } from "react";
import ArrowUpTrayIcon from "../../assets/img/arrow-up-tray.svg";
import "../../index.css";
import "./Contact.css";

const ContactUpload = ({ register, errors }: {register: any, errors: any}) => {
  const [ selectedFile, setSelectedFile ] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if(file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile("");
    }
  }

  return (
    <div className="upload">
      <label htmlFor="cover-photo">
        Upload file
      </label>
      <div className="box">
        <div>
          {<img src={ArrowUpTrayIcon} alt="" width={30} height={30}  /> }
          <div className="file-upload-wrapper">
            <label
              htmlFor="file-upload"
            >
              <span>Upload a file</span>
              <input 
                id="file-upload" 
                type="file"
                {...register("upload")}
                onChange={handleFileChange}
              />
            </label>
            <p>or drag and drop</p>
          </div>
          <p>PNG, JPG, GIF up to 10MB</p>
        </div>
        {selectedFile && (
          <p className="uploaded-name">
            Arquivo selecionado: <strong>{selectedFile}</strong>
          </p>
        )}
      </div>
      <p>{errors.upload?.message}</p>
    </div>
  );
};

export default ContactUpload;