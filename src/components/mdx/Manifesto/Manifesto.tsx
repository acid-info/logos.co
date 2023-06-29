import React from 'react'
import styles from './style.module.css'
import { Button } from '@acid-info/lsd-react'

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
          <a href="/about">
            <Button variant="outlined">Become a Founding Citizen</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
