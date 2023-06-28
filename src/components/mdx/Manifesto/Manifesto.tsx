import React, { useEffect } from 'react'
import styles from "./style.module.css"
export const Manifesto = ({ children }: any) => {
  // disable body.overflow when Manifesto is mounted and enable it when unmounted
  const [rendered, setRendered] = React.useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleClick = (e: any) => {
    if(e.target.tagName === 'DIV') {
      setRendered(null);
      document.body.style.overflow = 'auto'
    }
  }

  if(!rendered) return null;

  return(
    <div className={styles.container}
         onClick={handleClick}
    >
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <img src={'/theme/image/logo.svg'}/>
        </div>
        {children}
        <br/>
        <button>
          Become a Founding Citizen
        </button>
      </div>
    </div>
  )
}
