import { useState } from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = () => {
  const [category, setCategory] = useState("all");
  return (
    <section className="container py-16 flex flex-col gap-4">
      <h2>Explore our Menu</h2>
      <p className="w-[80%] md:w-[50%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
        totam deserunt. Expedita eaque nam incidunt libero officiis ullam
        accusamus, amet similique error ipsum atque, dolorum illum? Placeat
        laboriosam consequuntur quibusdam?
      </p>
      <div className="flex gap-4 overflow-x-scroll mt-5 justify-between">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "all" : item.menu_name
              )
            }
            key={index}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <img
              src={item.menu_image}
              alt="food menu image"
              className={`min-w-16 ${
                category === item.menu_name
                  ? "border-4 border-orange-500 rounded-full p-1"
                  : ""
              }`}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default ExploreMenu;
