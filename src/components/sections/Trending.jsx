import {Card, Title, Button} from "../index";
import {TrendingData} from "../../data/TrendingData";
import {NavLink} from "react-router-dom";
import scrollTotop from "../../utils/scrollTotop";

const Trending = () => {

  return (
    <section className="container py-12">
      <div className="flexCenter md:justify-between">
          <Title className="md:text-start" title="Trending" subtitle="Trending Games" />
          <NavLink onClick={scrollTotop} to="/ourshop" className='hover:bg-transparent'>
            <Button  className="hidden md:block hover:bg-primary" title="view all"/>
          </NavLink>
          
        </div>
      <div className="gridColumns">
        {TrendingData.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}/>
        ))}
      </div>
    </section>
  );
}

export default Trending;