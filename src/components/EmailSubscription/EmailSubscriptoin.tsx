import React, { useState } from 'react'
import styles from './EmailSubscriptoin.module.css'

const FAREWELL_NEWSLETTER_ID = '679a07eedeb47200012eebc5'

const EmailSubscription = () => {
  const [formState, setFormState] = useState({ email: '', name: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const errorMessage =
      'There was an error submitting the form. Please try again.'

    try {
      const res = await fetch(
        `https://admin-acid.logos.co/api/admin/newsletters/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formState?.email,
            type: 'logos',
            newsletter: FAREWELL_NEWSLETTER_ID,
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
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
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
