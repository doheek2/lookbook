import { HiMenu } from 'react-icons/hi'
import { MdOutlineWbSunny } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useState } from 'react'

import styles from './bar.module.scss'

const Bar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const modeBtnClickHandler = () => setIsDarkTheme((prev) => !prev)

  return (
    <header className={styles.header}>
      <HiMenu className={styles.menuBtn} color='#020100' />
      <p>LOOKBOOK</p>
      {!isDarkTheme && (
        <button type='button' className={styles.modeBtn} onClick={modeBtnClickHandler}>
          <MdOutlineWbSunny className={styles.brightBtn} color='#020100' />
        </button>
      )}
      {isDarkTheme && (
        <button type='button' className={styles.modeBtn} onClick={modeBtnClickHandler}>
          <BsFillMoonFill className={styles.darkBtn} color='#020100' />
        </button>
      )}
    </header>
  )
}

export default Bar
