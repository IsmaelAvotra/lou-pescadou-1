function headerProducts() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-5/6 h-3/6 flex justify-start items-center">
        <h1 className="text-white opacity-50 text-7xl font-black">
          lou pescadou
        </h1>
      </div>
      <div className="w-5/6 h-2/6 flex justify-center items-start">
        <img src="/assets/fish.png" className="5/6 md:w-3/6" alt="" />
      </div>
      <div className="w-5/6 h-1/6 flex justify-end items-start">
        <h2 className="text-white opacity-50 text-7xl font-black">30£</h2>
      </div>
    </div>
  );
}

export default headerProducts;
