import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Modal from 'components/Modal'
import { diaryActions } from 'store/diary-slice'

// TODO: 책 검색 기능 추가
const SearchBookModal = () => {
  const dispatch = useDispatch()
  const modalCloseHandler = useCallback(() => dispatch(diaryActions.isModalOpen(false)), [dispatch])

  return (
    <Modal modalCloseHandler={modalCloseHandler} size='large'>
      <p>modal</p>
    </Modal>
  )
}

export default SearchBookModal
