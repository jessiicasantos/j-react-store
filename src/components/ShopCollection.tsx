const ShopCollection = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto py-12 px-6 lg:px-8 w-full max-w-2xl lg:max-w-7xl">
      <h2>Shop Collection</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-x-8 w-full">
        <div className="relative group flex justify-center items-center h-full w-full">
          <img className="object-center object-cover h-full w-full     max-h-[450px] object-cover lg:max-h-[initial]" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
          <a href="#" className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
            Women
          </a>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>

        <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
          <div className="relative group flex justify-center items-center h-full w-full">
            <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
            <a href="#" className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
              Shoes
            </a>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
          <div className="relative group flex justify-center items-center h-full w-full">
            <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
            <a href="#" className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
              Watches
            </a>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCollection;