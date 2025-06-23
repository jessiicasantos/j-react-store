import ArrowUpTrayIcon from "../../assets/img/arrow-up-tray.svg";
import "../../index.css";

const ContactUpload = () => {
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
              <input id="file-upload" name="file-upload" type="file" />
            </label>
            <p>or drag and drop</p>
          </div>
          <p>PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUpload;