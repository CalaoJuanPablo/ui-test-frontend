import { ReactElement } from 'react'
import Link from 'next/link'

export default function Search(): ReactElement {
  return (
    <Link href="/search">
      <a>
        <i className="fas fa-search"></i>
      </a>
    </Link>
  )
}
