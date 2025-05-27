

const Card = ({title, description, price, image, className}) => {
  return (
  <div className={`bg-gray-100 shadow-lg rounded-3xl overflow-hidden ${className}`}>
    <img src={image} alt={title} className="w-full object-cover rounded-3xl" />
    <div className="p-4">
      <h3 className={`text-lg font-semibold text-h ${className}`}>{title}</h3>
      <p className="text-p mt-2">{description}</p>
      <p className="text-xl font-bold text-secondary mt-4">{price}</p>
    </div>
  </div>
  )
}

export default Card