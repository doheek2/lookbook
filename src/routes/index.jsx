import { Routes, Route } from 'react-router-dom'

import Main from './Main'
import Login from './Login'
import SignUp from './SignUp'
import BookDiary from './BookDiary'
import LookBook from './LookBook'
import Favorites from './Favorites'

import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='bookdiary' element={<BookDiary />} />
        <Route path='lookbook' element={<LookBook />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
