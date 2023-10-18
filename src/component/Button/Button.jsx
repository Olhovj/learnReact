import './Button.css'

const Button = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span>{title}</span>
    </button>
  )
}

export default Button
