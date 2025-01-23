import React, { useState } from 'react'
import styles from './EmailSubscriptoin.module.css'

const EmailSubscription = () => {
  const [formState, setFormState] = useState({ email: '', name: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const errorMessage =
      'There was an error submitting the form. Please try again.'

    try {
      const res = await fetch(
        `https://odoo.logos.co/website_mass_mailing/subscribe2`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'call',
            params: {
              value: formState?.email,
              name: formState?.name || '',
              list_id: 25,
              subscription_type: 'email',
            },
          }),
        },
      )

      const data = await res.json()
      setMessage(data.result.message)
      setFormState({ email: '', name: '' })
    } catch (error) {
      console.log(error)
      setMessage(errorMessage)
    }
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={e => setFormState({ ...formState, email: e.target.value })}
          placeholder="Email"
          required
        />
        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default EmailSubscription
