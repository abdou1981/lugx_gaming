import {CardHero} from "../index";
import { cardItems } from "../../data/CardItem";

const Features = () => {
  return (
    <div className="container gridColumns relative -top-20 uppercase">
      {cardItems.map((item) => (
        <CardHero
          key={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default Features