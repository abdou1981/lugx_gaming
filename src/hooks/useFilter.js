import { useState } from "react";
import { ShopGamesData } from "../data/ShopGamesData";

const useFilter = () => {
  const [data, setData] = useState(ShopGamesData);
  const [activeCategory, setActiveCategory] = useState("Show All");

  const filtreResult = (category) => {
    setActiveCategory(category);
    const result = ShopGamesData.filter((item) => item.category === category);
    setData(result);
    if (category === "Show All") {
      setData(ShopGamesData);
    }
  };

  return (
    {data, activeCategory, filtreResult }
  )
}

export default useFilter