import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rate }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full justify-center">
      <img src={imgURL} width={280} height={280} alt={name} />
      <div className="flex mt-8 justify-start gap-3">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-slate-gray font-bold ">{rate}</p>
      </div>
      <h3 className="text-xl font-bold font-palanquin leading-24 my-3">{name}</h3>
      <p className="font-bold font-montserrat text-coral-red">{price}</p>
    </div>
  );
};

export default PopularProductCard;
