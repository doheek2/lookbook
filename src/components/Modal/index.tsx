import cx from 'classnames'

import styles from './modal.module.scss'

type TSize = 'small' | 'medium' | 'large'

interface IProps {
  children: React.ReactNode
  modalCloseHandler: () => void
  size: TSize
}

const Modal = ({ children, modalCloseHandler, size }: IProps) => {
  return (
    <div className={styles.modal}>
      <button type='button' aria-hidden className={styles.backdrop} onClick={modalCloseHandler} />
      {/* TODO: small, medium css 사이즈 추가 */}
      <div
        className={cx(
          styles.box,
          size === 'small' && styles.small,
          size === 'medium' && styles.medium,
          size === 'large' && styles.large
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
