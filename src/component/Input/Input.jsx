import './Input.css'

const Input = ({ LeftIcon, RightIcon, placeholder }) => {
  return (
    <div className="inputContainer">
      {LeftIcon && <LeftIcon className="iconLeft" />}
      <input placeholder={placeholder} />
      {RightIcon && <RightIcon />}
    </div>
  )
}

export default Input
