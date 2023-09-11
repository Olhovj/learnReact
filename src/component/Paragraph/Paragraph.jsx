import './Paragraph.css'

const Paragraph = ({ content, large = false }) => {
  return <p className={large ? 'paragraph-large' : 'paragraph'}>{content}</p>
}

export default Paragraph
