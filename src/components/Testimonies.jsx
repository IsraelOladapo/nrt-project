import { Avatar } from "flowbite-react";
import { Heading2 } from "./Heading";

function Testimonies() {
  return (
    <div className="bg-gray-300 my-[7rem] font-Poppins font-light p-7 ">
      <Heading2 heading="What our Clients say" />
      <div className="flex flex-col items-center md:flex-row md:justify-between  gap-15 px-15 text-center">
        <div className="flex flex-col items-center">
          <img
            className="w-[100px] h-[100px] rounded-full object-cover"
            src="/slide7.jpg"
            alt=""
          />
          <h1 className="font-medium mt-4">
            Nimie <span className="text-gray-500">Customer</span>
          </h1>
          <p className="text-royal">Osun, Nigeria</p>
          <p className="break-normal my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            est vel ut nisi optio. Sint doloremque mollitia eaque nobis
            voluptatibus nulla tenetur ratione iusto. Rem illo inventore
            perspiciatis architecto id.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[100px] h-[100px] rounded-full object-cover"
            src="/slide5.jpg"
            alt=""
          />
          <h1 className="font-medium mt-4">
            Dev. Iszie <span className="text-gray-500">Customer</span>
          </h1>
          <p className="text-royal">Lagos, Nigeria</p>
          <p className="break-normal my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            est vel ut nisi optio. Sint doloremque mollitia eaque nobis
            voluptatibus nulla tenetur ratione iusto. Rem illo inventore
            perspiciatis architecto id.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
