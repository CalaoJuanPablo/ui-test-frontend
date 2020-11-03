import { ReactElement, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { personalitiesActions } from '../../redux/slices/personalities/personalities.slice'
import { renderFeedData } from './Feed.helpers'
import styles from './Feed.module.scss'
import { IGlobalState } from 'src/redux/store'
import { IPersonalitiesState } from 'src/redux/slices/personalities/personalities.types'

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
