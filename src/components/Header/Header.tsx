import { ReactElement } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header(): ReactElement {
  return (
    <header className={styles.Header}>
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
          </ul>
          {/* Searcher */}
        </nav>
      </div>
    </header>
  )
}
