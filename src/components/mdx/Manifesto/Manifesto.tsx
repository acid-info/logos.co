import { Button } from '@acid-info/lsd-react'
import Link from '@docusaurus/Link'
import React from 'react'
import styles from './style.module.css'

type Props = {
  children: React.ReactNode
}

export const Manifesto = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <img src={'/theme/image/logo.svg'} />
        </div>
        {children}
        <div className={styles.cta}>
          <Link to="/history">
            <Button variant="outlined">Find Out More</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
