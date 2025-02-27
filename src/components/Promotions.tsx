import WomanHeadphone from "../assets/img/woman-headphone.jpg";

const Promotions = () => {
  return (
    <div className="grid grid-cols-2 items-center max-w-2xl lg:max-w-7xl mx-auto">
        <div>
            <img src={WomanHeadphone} alt="" className="w-full object-cover" />
        </div>
        <div>
            <h6>Promotion</h6>
            <h3>Hurry up! 40% OFF</h3>
            <p>Thousands of high tech are waiting for you</p>

            {/* TIMER */}
            <a href="x">Shop now</a>
        </div>
    </div>
  )
};

export default Promotions;
