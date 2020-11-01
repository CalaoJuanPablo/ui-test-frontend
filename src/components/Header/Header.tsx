import { ReactElement } from 'react'
import Link from 'next/link'
import Search from '../Search/Search'
import styles from './Header.module.scss'

interface IHeader {
  isHome?: boolean
}

export default function Header({ isHome }: IHeader): ReactElement {
  function getHeaderClassName(homeVariant: boolean): string {
    if (homeVariant) return `${styles.Header} ${styles['Header--home']}`
    return styles.Header
  }

  return (
    <header className={getHeaderClassName(isHome)}>
      <div className={styles.Header__container}>
        <Link href="/">
          <a className={styles.Header__logo}>Rule Of Thumb.</a>
        </Link>
        <nav className={styles.Header__nav}>
          <ul className={styles.Header__menu}>
            <li className={styles['Header__menu--item']}>
              <Link href="/past-trials">
                <a>Past Trials</a>
              </Link>
            </li>
            <li className={styles['Header__menu--item']}>
              <Link href="/how-it-works">
                <a>How It Works</a>
              </Link>
            </li>
            <li className={styles['Header__menu--item']}>
              <Link href="/join">
                <a>Log In/Sign Up</a>
              </Link>
            </li>
            <li className={styles['Header__menu--item']}>
              <Search />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
