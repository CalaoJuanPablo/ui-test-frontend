import { ReactElement } from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer(): ReactElement {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        <nav className={styles['Footer__legal_nav']}>
          <ul className={styles['Footer__legal-menu']}>
            <li className={styles['Footer__legal-menu--item']}>
              <Link href="/terms">
                <a>Terms and Conditions</a>
              </Link>
            </li>
            <li className={styles['Footer__legal-menu--item']}>
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className={styles['Footer__legal-menu--item']}>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.Footer__social}>
          <span>Follow Us</span>
          <ul className={styles['Footer__social-menu']}>
            <li className={styles['Footer__social-menu--item']}>
              <a
                href="https://www.facebook.com/Zemoga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className={styles['Footer__social-menu--item']}>
              <a
                href="https://twitter.com/Zemoga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
