// Dependencies
import { ReactElement, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Utilities
import { personalitiesActions } from '../../redux/slices/personalities/personalities.slice'
import { renderFeedData } from './Feed.helpers'
// Types
import { IGlobalState } from 'src/redux/store.types'
import { IPersonalitiesState } from 'src/redux/slices/personalities/personalities.types'
// Styles
import styles from './Feed.module.scss'

export default function Feed(): ReactElement {
  const dispatch = useDispatch()
  const { ids: personalitiesIds } = useSelector(
    (state: IGlobalState): IPersonalitiesState => state.personalities
  )

  useEffect(() => {
    dispatch(personalitiesActions.getAll())
  }, [])

  return <div className={styles.Feed}>{renderFeedData(personalitiesIds)}</div>
}
