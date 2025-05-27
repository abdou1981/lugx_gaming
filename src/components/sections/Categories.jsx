import {CategoriesData} from "../../data/CategoriesData";
import {Card, Title} from "../index";

const Categories = () => {
  return (
    <section className="container py-12">
      <Title  title="Categories" subtitle="Top Categories" />
      <div className="gridColumns">
        {CategoriesData.map((item) => (
          <Card
            className="bg-primary flex flex-col-reverse text-center text-white"
            key={item.id}
            title={item.name}
            image={item.image}/>
        ))}
      </div>
    </section>
  )
}

export default Categories;