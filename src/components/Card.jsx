import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/actions/card";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Card = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);

  console.log(cardItems, "cardItems");

  const deleteCard = (productId) => {
    dispatch(removeCart(productId));
  };

  return (
    <div className="w-[375px] h-full border fixed top-0 right-0 z-50 bg-white p-4 gap-5">
      <div className="flex items-center h-20 justify-between">
        <h1 className="text-2xl">MY BASKET:</h1>
        <AiOutlineClose
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          size={25}
          className="cursor-pointer"
        />
      </div>

      <div className="overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide">
        {cardItems?.map((card, i) => (
          <div
            key={i}
            className="h-34 flex items-center flex-col border rounded-md mt-3 mb-3"
          >
            <div className="flex items-end justify-end w-full border-b p-3">
              <div
                onClick={() => deleteCard(card?.id)}
                className="cursor-pointer"
              >
                <IoIosCloseCircleOutline size={25} color="gray" />
              </div>
            </div>
            <div className="border-b w-full flex items-center justify-center p-3">
              <img
                className="h-[80px] w-[80px] object-contain"
                src={card?.image}
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-md flex justify-between p-3 border-b">
                <span className="font-medium">Product:</span>
                <span className="text-[#FF0000]">
                  {card?.title.substring(0, 25)}
                </span>
              </div>
              <div className="text-md flex justify-between p-3 border-b">
                <span className="font-medium">Quantity:</span>
                <span className="text-gray-500">{card?.qty}</span>
              </div>
              <div className="text-md flex justify-between p-3">
                <span className="font-medium">Price:</span>
                <span className="text-gray-500">{card?.price} $</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Card;
