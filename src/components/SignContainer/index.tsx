import { MouseEventHandler } from 'react'
import styles from './signContainer.module.scss'

interface IProps {
  children: JSX.Element
  logoBtnClickHandler: MouseEventHandler<HTMLButtonElement>
}

const SignContainer = ({ children, logoBtnClickHandler }: IProps) => {
  return (
    <main className={styles.wrapper}>
      <article className={styles.introduce}>
        <p>책으로 소통하는</p>
        <p>우리만의 공간</p>
        <button type='button' className={styles.webLogo} onClick={logoBtnClickHandler}>
          LOOKBOOK
        </button>
      </article>
      <article className={styles.whiteBox}>{children}</article>
    </main>
  )
}

export default SignContainer
