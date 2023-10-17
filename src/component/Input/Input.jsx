import './Input.css'

const Input = ({ LeftIcon, RightIcon }) => {
  return (
    <div className="inputContainer">
      {LeftIcon && <LeftIcon className="iconLeft" />}
      <input placeholder="Тест" />
      {RightIcon && <RightIcon />}
    </div>
  )
}

export default Input
