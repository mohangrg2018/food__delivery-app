import { useContext } from "react";
import StoreContext from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <section className="container">
      <h2>Top Dishes Near You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {food_list.slice(0, 8).map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl pb-8">
            <img
              src={item.image}
              alt="food"
              className="w-full rounded-t-xl mb-4"
            />
            <div className="px-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p>{item.name}</p>
                <img src={assets.rating_starts} alt="star rating" />
              </div>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodDisplay;
