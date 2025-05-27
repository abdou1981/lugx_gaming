
const Title = ({title, subtitle, className}) => {
  return (
    <div className={`font-bold text-center ${className}`}>
      <h1 className="text-2xl mb-4 text-secondary">{title}</h1>
      <h2 className="text-4xl mb-8 text-h">{subtitle}</h2>
    </div>
  )
}

export default Title;