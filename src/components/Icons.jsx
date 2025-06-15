import {
  HomeIcon,
  AcademicCapIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

import { Heading } from "./Heading";
function IconSection() {
  return (
    <div className="my-[5rem] md:h-[50vh] font-Poppins">
      <Heading heading="Fashion Speak" />
      <div className="flex flex-col md:flex-row justify-around gap-[3rem] p-4 shadow-md">
        <div className="mt-5">
          <HomeIcon className="text-royal size-[2rem] m-auto" />
          <h3 className="font-bold my-4 text-center">Home of Fashion</h3>
          <p className="break-all md:break-normal text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            consectetur ab vitae porro accusantium, doloribus quae architecto
            fugiat, repellendus, pariatur obcaecati laborum sequi vero!
            Dignissimos magnam amet illum facere laborum.
          </p>
        </div>
        <div>
          <AcademicCapIcon className="text-royal size-[2rem] m-auto" />
          <h3 className="font-bold my-4 text-center">Top Brand</h3>
          <p className="break-all md:break-normal text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa omnis
            excepturi odit veniam perspiciatis assumenda a error doloremque
            facilis autem modi corrupti aut eaque maiores recusandae, sunt quae
            necessitatibus voluptates?
          </p>
        </div>
        <div className="mb-10">
          <PhotoIcon className="text-royal size-[2rem] m-auto" />
          <h3 className="font-bold my-4 text-center">Styles Galore</h3>
          <p className="break-all md:break-normal text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            illo sint asperiores voluptatem fugit, veniam fugiat est vel? Ea,
            dolorem hic. Laudantium ea quis blanditiis, suscipit explicabo quas
            tempore ex.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IconSection;
