import './MainPageTitle.css'

import Title from '../Title'
import Button from '../Button'
import Paragraph from '../Paragraph'
import Input from '../Input'

import Search from '../Icon/Search'

const MainPageTitle = () => {
  const paragraphContent =
    'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
  return (
    <div className="MainPageTitle">
      <div className="text">
        <Title content={'Поиск'} />
        <Paragraph content={paragraphContent} />
      </div>
      <div className="searchTitle">
        <Input LeftIcon={Search} placeholder={'Введите название'} />
        <Button
          title={'Искать'}
          onClick={() => console.log('Нажани на "Искать"')}
        />
      </div>
    </div>
  )
}

export default MainPageTitle
