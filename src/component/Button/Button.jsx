import './Button.css'

const Button = ({ title }) => {
  return (
    <button className="button">
      <span>{title}</span>
    </button>
  )
}

export default Button
