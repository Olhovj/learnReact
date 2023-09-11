import './App.css'
import Title from './component/Title'
import Button from './component/Button'
import Paragraph from './component/Paragraph'

function App() {
  const paragraphContent =
    'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
  return (
    <>
      <Title content={'Поиск'} />
      <Paragraph content={paragraphContent} />
      <Button title={'Искать'} />
    </>
  )
}

export default App
