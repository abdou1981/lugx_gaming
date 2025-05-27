
const TitlePage = ({title, subtitle}) => {
  return (
    <div className="bgTh pt-40 pb-20 rounded-b-[120px] mb-40">
      <div className="container text-white text-center">
        <h1 className="text-5xl font-bold mb-2">{title}</h1>
        <p className="">{subtitle}</p>
      </div>
    </div>
  )
}

export default TitlePage