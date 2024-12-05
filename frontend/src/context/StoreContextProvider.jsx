import { food_list } from "../assets/frontend_assets/assets";
import StoreContext from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const value = {
    food_list,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
