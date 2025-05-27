import { Categories, TitlePage } from './../components/index';

const Product = () => {
  return (
    <section className="">
      <TitlePage title="Modern Warfare® II" subtitle="Home &gt; Product Details" />
      <div className="container flexColumn lg:flex-row gap-10 items-center py-12">
        <div className="w-full lg:w-1/2 flexCenter mx-8">
          <img
            src="/src/assets/images/single-game.jpg"
            alt="Product"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 mx-8">
          <h1 className="text-4xl font-bold text-secondary mb-4">Call of Duty®: Modern Warfare® II</h1>
          <p className="text-lg text-p mb-6">This is a detailed description of the product. Highlight the features, gameplay, and what makes this game unique. Add more details as needed to inform and excite the user.</p>
          <ul className="mb-6">
            <li className="mb-2"><span className="font-semibold">Genre:</span> Action, Adventure</li>
            <li className="mb-2"><span className="font-semibold">Platform:</span> PC, PlayStation, Xbox</li>
            <li className="mb-2"><span className="font-semibold">Release Date:</span> May 24, 2025</li>
            <li className="mb-2"><span className="font-semibold">Developer:</span> Lugx Studio</li>
          </ul>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-primary">$49.99</span>
            <span className="line-through text-gray-400">$59.99</span>
          </div>
          <button className="bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full trnsform">Buy Now</button>
        </div>
      </div>
      <div className="container">
        <div className="p-4 md:p-12 bg-septenary rounded-3xl shadow-lg">
          <h2 className="text-lg font-bold text-center mb-4 md:mb-8"><span className='text-primary border-r-2 border-p pr-4'>Description</span> Reviews (3)</h2>
          <p>
            You can search for more templates on Google Search using keywords such as
            "templatemo digital marketing", "templatemo one-page", "templatemo gallery",
            etc. Please tell your friends about our website. If you need a variety of HTML
            templates, you may visit Tooplate and Too CSS websites.
            Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray 
            hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.
          </p>
        </div>
      </div>
      <Categories/>
    </section>
  );
}

export default Product