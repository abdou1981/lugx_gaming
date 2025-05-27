import {Button, Card, Title} from "../index";
import {TopGamesData} from "../../data/TopGamesData";
import { NavLink } from "react-router-dom";
import scrollTotop from "../../utils/scrollTotop";

const TopGames = () => {

  return (
    <section id="product" className="py-12 bg-gray-100">
      <div className="container">
        <div className="flexCenter md:justify-between">
          <Title className="md:text-start" title="Top Games" subtitle="Most played" />
          <NavLink onClick={scrollTotop} to="/ourshop" className='hover:bg-transparent'>
              <Button className="hidden md:block hover:bg-primary" title="view all"/>
          </NavLink>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {TopGamesData.map((item, idx) => (
            <div key={idx} className="cursor-pointer text-center hover:scale-105 duration-300">
              <Card
              description={item.catigory}
              title={item.title}
              image={item.image}
              />
              <NavLink onClick={scrollTotop} to="/product" className='hover:bg-transparent'>
                <Button className="hover:bg-primary relative -top-5" title='explore'/>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopGames;