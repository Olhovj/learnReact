import Layout from './component/Layout'

import Title from './component/Title'
import Button from './component/Button'
import Paragraph from './component/Paragraph'
import Input from './component/Input'

import Search from './component/Icon/Search'

function App() {
  const paragraphContent =
    'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
  return (
    <Layout>
      <Title content={'Поиск'} />
      <Paragraph content={paragraphContent} />
      <Input />
      <Input LeftIcon={Search} />
      <Button
        title={'Искать'}
        onClick={() => console.log('Нажани на "Искать"')}
      />
    </Layout>
  )
}

export default App
