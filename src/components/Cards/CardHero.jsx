import { GetImageUrl } from "../../utils/imageUtils";

const CardHero = ({ image, title }) => (
  <div className="bg-white shadow-2xl rounded-3xl flexColumn items-center p-7">
    <div className="bg-primary hover:bg-secondary trnsform rounded-full size-[100px] flexCenter cursor-pointer " >
      <img src={GetImageUrl(image)} alt={title}/>
    </div>
    <div className="pt-4">
      <h2 className="text-lg font-semibold text-h">{title}</h2>
    </div>
  </div>
);

export default CardHero;