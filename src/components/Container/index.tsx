import Bar from 'components/Bar'
import Menu from 'components/Menu'
import styles from './container.module.scss'

interface IProps {
  children: JSX.Element
}

const Container = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <Bar />
      <div className={styles.menuContainer}>
        <Menu isMobile={false} />
      </div>
      {children}
    </div>
  )
}

export default Container
