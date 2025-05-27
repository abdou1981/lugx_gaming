import BannerImage from "../../assets/images/banner-image.jpg"

const Hero = () => {
  return (
    <div className="bgH bg-cover bg-no-repeat bg-center rounded-b-[150px] overflow-hidden">
      <div className="container flexColumn lg:flex-row justify-between py-60">
        <div className="basis-1/2">
          <div className="text-center text-white lg:text-left">
            <h1 className="mb-5 text-xl uppercase font-semibold">Welcome to lugx</h1>
            <p className="mb-12 text-5xl font-bold">BEST GAMING SITE EVER!</p>
            <p className="mb-20">LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. 
              You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
            </p>
          </div>
          <div className="mb-12 relative lg:w-[480px]">
            <form id="search" action="#">
              <input className="w-full bg-white py-3 px-6 rounded-full outline-none" type="text" placeholder="Type Something" id='searchText' name="searchKeyword" />
              <button className="absolute top-0 right-0 h-full ">Search Now</button>
            </form>
          </div>
        </div>
        <div className="w-full rounded-4xl relative basis-1/3">
          <div className="w-full rounded-4xl overflow-hidden">
            <img className="w-full" src={BannerImage} alt="BannerImage"/>
          </div>
          <span className="absolute  top-5 right-5 bg-primary text-white text-2xl font-bold px-4 py-1 rounded-full">$22</span>
          <span className="absolute -left-7 -bottom-7 lg:-bottom-2 bg-secondary size-[100px] rounded-full text-white text-3xl font-bold flex justify-center items-center">-40%</span>
        </div>
    </div>
    </div>
  )
}

export default Hero