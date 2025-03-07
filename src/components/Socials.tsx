import { Link } from "react-router-dom";
import WomanHeadPhoneCity from "../assets/img/woman-headphone-city.jpg";
import YoungWomanHeadphone from "../assets/img/young-woman-headphone-city.jpg";
import SnoopDoggHeadphone from "../assets/img/snoop-dogg-headphone.jpg";
import MowalolaBeats from "../assets/img/mowalola-beats.jpg";

const Socials = () => {
    return (
      <div className="bg-gray-50 py-12 sm:py-22 flex items-center justify-center">
        <div className="max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h6 className="text-base/7 font-semibold text-indigo-600 uppercase">Newspeed</h6>
          <h3 className="mt-2 max-w-lg font-semibold tracking-tight text-gray-950 mx-auto sm:text-5xl">
            Instagram
          </h3>
          <p className="my-5">Follow us on social media for more discount & promotions</p>
          <Link to="" target="_blank" className="font-semibold text-gray-500">@VisioCreate_official</Link>

          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-4">
            <div className="shadow-2xl">
              <img
                className="object-cover rounded-xl h-[200px] lg:h-[300px] w-full"
                src={WomanHeadPhoneCity}
                alt=""
              />
            </div>
           <div className="shadow-2xl">
              <img
                className="object-cover rounded-xl h-[200px] lg:h-[300px] w-full"
                src={YoungWomanHeadphone}
                alt=""
              />
            </div>
           <div className="shadow-2xl">
              <img
                className="object-cover rounded-xl h-[200px] lg:h-[300px] w-full"
                src={SnoopDoggHeadphone}
                alt=""
              />
            </div>
           <div className="shadow-2xl">
              <img
                className="object-cover rounded-xl h-[200px] lg:h-[300px] w-full"
                src={MowalolaBeats}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    )
  }  

export default Socials;
