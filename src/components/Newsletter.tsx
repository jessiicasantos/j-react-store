import WhiteHeadphone from "../assets/img/white-headphone.png";
import HappyGirlHeadphone from "../assets/img/happy-girl-headphone.png";

const Newsletter = () => {
  return (
    <div className="newsletter flex justify-center items-center bg-gray-900 w-full lg:px-10">
      <div className="hidden lg:block">
        <img src={WhiteHeadphone} alt="" />
      </div>
      <div className="flex flex-col items-center lg:mx-30 p-10 lg:p-0">
        <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
        <p className="mt-4 text-lg text-gray-300 mb-4">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex flex-col lg:flex-row w-full gap-x-4 mt-6 lg:w-[125%]">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            autoComplete="email"
            className="min-w-0 w-full flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-auto mt-6 lg:mt-0 "
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={HappyGirlHeadphone} alt="" />
      </div>
    </div>
  )
}

export default Newsletter;