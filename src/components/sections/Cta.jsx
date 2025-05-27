import { Title, Button } from '../index';
import CardCta from '../Cards/CardCta';
import ctaImage from '../../assets/images/cta-bg.jpg';

const Cta = () => {
  return (
    <div className='container my-30 flexColumn justify-center gap-8 md:flex-row relative'>
      <CardCta className="top-20 xl:left-20 left-5">
        <Title title="Our Shop" subtitle="Go Pre-Order Buy & Get Best Prices For You!" />
        <p className="text-p text-lg my-10 text-center">
          Lorem ipsum dolor consectetur adipiscing, Sed do eiusmod tempor incididunt.
        </p>
        <Button title="shop now" />
      </CardCta>
      
        <div  className='hidden lg:block rounded-3xl overflow-hidden'>
          <img src={ctaImage} alt="ctaImage" />
        </div>
        
      <CardCta className="lg:top-70 xl:right-20 right-5">
        <Title title="NEWSLETTER" subtitle="Get Up To $100 Off Just Buy Subscribe Newsletter!" />
        <div className="relative w-full mt-10">
          <form id="search" action="#">
            <input className="w-full bg-white py-3 px-6 rounded-full outline-none" type="text" placeholder="Your Email" id='searchText' name="searchKeyword" />
            <button className="w-full md:w-fit mt-5 md:mt-0 md:absolute md:top-0 md:right-0 md:h-full">Subscribe now</button>
          </form>
        </div>
      </CardCta>
    </div>
  )
}

export default Cta;