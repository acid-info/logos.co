import React from 'react'
import Footer from '@theme-original/Footer'
// import { useLocation } from '@docusaurus/router'
import { Box, Grid, InputCTASection } from '../../components/mdx'

export default function FooterWrapper(props) {
  // const location = useLocation()
  // const pathname = location.pathname

  return (
    <>
      <Box bottom={{ sm: 96 }}>
        <Grid
          xs={{ cols: 1, gap: '1rem' }}
          md={{ cols: 2 }}
          className="bottom-cta-sections exit-form"
        >
          <Grid.Item xs={1}>
            <InputCTASection
              title=""
              description={'Freedom needs builders'}
              link="https://discord.gg/logosnetwork"
              label="Get Involved"
              linkProps={{
                onClick: () =>
                  //@ts-ignore
                  umami.track('Get Involved', { source: 'footer' }),
              }}
            />
          </Grid.Item>
          <Grid.Item xs={1}>
            <InputCTASection
              title=""
              description={'Stay ahead with the latest updates'}
              label="Subscribe"
              linkProps={{
                onClick: () =>
                  //@ts-ignore
                  umami.track('Subscribe', { source: 'footer' }),
              }}
              formInput={[
                {
                  label: 'Email',
                  placeholder: 'Enter your email',
                  type: 'email',
                  name: 'email',
                  required: true,
                },
              ]}
              buType={'logos'}
              newsletterId="6835cf08531d570001068824"
            />
          </Grid.Item>
        </Grid>
      </Box>

      <Footer {...props} />
    </>
  )
}
