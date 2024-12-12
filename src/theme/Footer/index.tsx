import React from 'react'
import Footer from '@theme-original/Footer'
import { useLocation } from '@docusaurus/router'
import { Box, Grid, InputCTASection } from '../../components/mdx'

export default function FooterWrapper(props) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <>
      {(pathname === '/exit' || pathname === '/exit/') && (
        <Box bottom={{ sm: 96 }}>
          <Grid
            xs={{ cols: 1, gap: '1rem' }}
            md={{ cols: 2 }}
            className="bottom-cta-sections exit-form"
          >
            <Grid.Item xs={1}>
              <InputCTASection
                title=""
                description={'Join the Discord community'}
                link="https://discord.gg/logosnetwork"
                label="Get Involved"
              />
            </Grid.Item>
            <Grid.Item xs={1}>
              <InputCTASection
                description={'Subscribe\nto our newsletter'}
                label="Subscribe"
                formInput={[
                  {
                    label: 'Email',
                    placeholder: 'Enter your email',
                    type: 'email',
                    name: 'email',
                    required: true,
                  },
                ]}
                //@ts-ignore
                buType={'operators'}
              />
            </Grid.Item>
          </Grid>
        </Box>
      )}
      <Footer {...props} />
    </>
  )
}
