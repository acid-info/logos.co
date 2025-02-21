import React, { useState } from 'react'
import styles from './GhostForm.module.css'

type Props = {
  title?: string
  newsletterId?: number
  buType: string
  successMessage: string
  errorMessage: string
}

const GhostForm = ({
  title,
  newsletterId,
  buType,
  successMessage,
  errorMessage,
}: Props) => {
  const [formState, setFormState] = useState({ email: '', name: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!formState?.email) {
      setMessage('Please enter an email address')
      return
    }

    try {
      const res = await fetch(
        `https://odoo.logos.co/website_mass_mailing/subscribe_ghost`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'call',
            params:
              newsletterId == null
                ? {
                    email: formState?.email,
                    type: buType,
                    subscription_type: 'email',
                  }
                : {
                    email: formState?.email,
                    type: buType,
                    subscription_type: 'email',
                    newsletter: newsletterId,
                  },
          }),
        },
      )

      const data = await res.json()

      if (data?.result?.errors && data?.result?.errors[0]?.context?.length) {
        setMessage(data?.result?.errors[0].context)
        return
      } else if (data?.result?.message?.length) {
        setMessage(data.result.message)
        return
      }

      setMessage(successMessage)
    } catch (error) {
      console.log(error)
      setMessage(errorMessage)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={e =>
              setFormState({ ...formState, email: e.target.value })
            }
            placeholder="Email"
            required
          />
          <button type="submit">Submit</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  )
}

export default GhostForm
