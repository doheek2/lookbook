import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import Main from './Main'
import BookDiary from './BookDiary'
import LookBook from './LookBook'
import Favorites from './Favorites'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='bookdiary' element={<BookDiary />} />
          <Route path='lookbook' element={<LookBook />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
