import React, { useEffect } from 'react'
import Layout from '@theme/Layout'
import GhostForm from '../components/GhostForm/GhostForm'

export default function CustomPage() {
  useEffect(() => {
    document.documentElement.classList.add('page-custom-page')
    return () => document.documentElement.classList.remove('page-custom-page')
  }, [])

  return (
    <Layout noFooter>
      <GhostForm
        title={`Subscribe for updates about\n'Farewell to Westphalia'`}
        newsletterId="679a07eedeb47200012eebc5"
        buType="logos"
        successMessage="Thank you for subscribing!"
        errorMessage="An error occurred. Please try again."
      />
    </Layout>
  )
}
