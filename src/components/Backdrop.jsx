import "../index.css";

function Backdrop() {
  return (
    <div className="relative w-full h-[50vh] md:h-[50vh] overflow-hidden shadow-md font-Poppins font-light">
      <img
        src="/backdrop.jpg"
        alt="Backdrop"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-royal/10 backdrop-blur-md"></div>

      <div className="absolute right-15 bottom-20 sm:right-30 z-10 md:right-45 xl:right-10 text-gold rounded-2xl shadow-2xl p-3">
        <h1 className="text-gradient text-4xl text-center text-white font-bold">
          <span className="">Nimie</span> Royal Thread
        </h1>
        <p className="text-center mt-4">
          Fashionista's{" "}
          <span className="text-white bg-royal/50 p-1 rounded-sm">
            paradise
          </span>
        </p>
      </div>
    </div>
  );
}

export default Backdrop;
