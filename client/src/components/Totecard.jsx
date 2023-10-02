// eslint-disable-next-line react/prop-types
export default function Totecard({ image, price, name, description }) {
  return (
    <div className="flex flex-col items-center ">
      <div className="p-16 bg-gray-100">
        <img src={image} alt="tote" />
      </div>
      <div className="space-y-2 text-center pt-4 text-base font-bold">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{price}</p>
        <button className="bg-yellow-700 py-3 px-8 text-white">Buy</button>
      </div>
    </div>
  );
}
