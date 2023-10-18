import './Paragraph.css'

const Paragraph = ({ content, large = false }) => {
  return (
    <span className={large ? 'paragraph-large' : 'paragraph'}>{content}</span>
  )
}

export default Paragraph
