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
          <a href="/history">
            <Button variant="outlined">Find Out More</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
