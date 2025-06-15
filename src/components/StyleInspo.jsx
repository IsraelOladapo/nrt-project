import { Heading } from "./Heading";
function StyleGallery(props) {
  return (
    <div className="mx-[6rem] my-[5rem]">
      <Heading heading="Style Inspo" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center gap-5">
        <div className="">
          <img className="" src="styles-gallery/syleInspo1.jpg" alt="" />
        </div>
        <div className="">
          <img src="styles-gallery/syleInspo2.jpg" alt="" />
        </div>
        <div className="">
          <img src="styles-gallery/syleInspo3.jpg" alt="" />
        </div>
        <div className="">
          <img src="styles-gallery/syleInspo4.jpg" alt="" />
        </div>
        <div className="">
          <img src="styles-gallery/syleInspo5.jpg" alt="" />
        </div>
        <div className="">
          <img src="styles-gallery/syleInspo6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default StyleGallery;
