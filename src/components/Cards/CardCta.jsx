
const CardCta = ({children, className=''}) => {
  return (
    <div className={`bg-septenary py-10 px-5 flexCenter flex-col rounded-3xl shadow-lg lg:absolute lg:w-[400px] xl:w-[450px] z-2 ${className}`}>
      {children}
    </div>
  )
}

export default CardCta