import {
  FacebookIcon,
  GoogleIcon,
  PinterestIcon,
  XIcon,
} from "../components/custom_Icons/MyCustomIcons";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-gray-900 text-gray-400 flex flex-col items-center font-Poppins font-light">
      <p className="mt-3 p-5 text-white">Instagram Posts</p>
      <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-6 gap-4">
        <img className="w-[100px] h-[100px]" src="/slide1.jpg" alt="" />
        <img className="w-[100px] h-[100px]" src="/slide7.jpg" alt="" />
        <img
          className="w-[100px] h-[100px]"
          src="/styles-gallery/syleInspo4.jpg"
          alt=""
        />
        <img
          className="w-[100px] h-[100px]"
          src="/styles-gallery/syleInspo5.jpg"
          alt=""
        />
        <img
          className="w-[100px] h-[100px]"
          src="/styles-gallery/syleInspo6.jpg"
          alt=""
        />
        <img
          className="w-[100px] h-[100px]"
          src="/styles-gallery/syleInspo7.jpg"
          alt=""
        />
      </div>
      <p className="py-8 text-gold">Signup to our newsletter</p>
      <input
        className="border-b-1 w-[20rem] md:w-[30rem] text-center p-2"
        type="email"
        placeholder="Enter your email..."
      />
      <button className="text-royal bg-white w-[20rem] md:w-[30rem] font-medium border-b-4 p-1 mt-3 cursor-pointer">
        Subscribe
      </button>
      <p className="mt-2">We respect your privacy no spam event</p>
      <p className="mt-5 border-b-1">Follow us</p>
      <div className="mt-4 flex gap-10">
        <FacebookIcon />
        <XIcon />
        <GoogleIcon />
        <PinterestIcon />
      </div>
      <p className="my-10 text-gray-400">© {date} NRT All Rights Reserved</p>
    </div>
  );
};

export default Footer;
