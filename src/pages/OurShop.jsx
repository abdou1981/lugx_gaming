import { Card, TitlePage } from "../components";
import { ShopGamesData } from "../data/ShopGamesData";
import { useState } from "react";

const OurShop = () => {
  const [data, setData] = useState(ShopGamesData);

  const filtreResult = (category) => {
    const result = ShopGamesData.filter((item) => item.category === category);
    setData(result);
    if (category === "Show All") {
      setData(ShopGamesData);
    }
  };


  return (
    <section>
      <TitlePage title="Our Shop" subtitle="Home &gt; Our Shop" />
      <ul className="flex justify-center items-center gap-5 mb-20">
        <li className="bg-quinary hover:text-secondary cursor-pointer p-2 rounded-full text-[14px]" onClick={() => filtreResult("Show All")}>SHOW ALL</li>
        <li className="bg-quinary hover:text-secondary cursor-pointer p-2 rounded-full text-[14px]" onClick={() => filtreResult("Action")}>Action</li>
        <li className="bg-quinary hover:text-secondary cursor-pointer p-2 rounded-full text-[14px]" onClick={() => filtreResult("Adventure")}>ADVENTURE</li>
        <li className="bg-quinary hover:text-secondary cursor-pointer p-2 rounded-full text-[14px]" onClick={() => filtreResult("Strategy")}>STRATEGY</li>
        <li className="bg-quinary hover:text-secondary cursor-pointer p-2 rounded-full text-[14px]" onClick={() => filtreResult("Racing")}>RACING</li>
      </ul>
      <div className="container mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-8 px-7">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default OurShop;