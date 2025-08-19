export const createUTMUrl = (
  baseUrl: string,
  source: string = '',
  medium: string = '',
  campaign: string = '',
  content: string = '',
  term: string = '',
  redirectBase: string = 'https://links.logos.co/redirect',
): string => {
  const urlParams =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams()

  const utmParams = new URLSearchParams()

  if (source || urlParams.get('utm_source')) {
    utmParams.set('utm_source', source || urlParams.get('utm_source')!)
  }
  if (medium || urlParams.get('utm_medium')) {
    utmParams.set('utm_medium', medium || urlParams.get('utm_medium')!)
  }
  if (campaign || urlParams.get('utm_campaign')) {
    utmParams.set('utm_campaign', campaign || urlParams.get('utm_campaign')!)
  }
  if (content || urlParams.get('utm_content')) {
    utmParams.set('utm_content', content || urlParams.get('utm_content')!)
  }
  if (term || urlParams.get('utm_term')) {
    utmParams.set('utm_term', term || urlParams.get('utm_term')!)
  }

  return `${redirectBase}?redirect=${encodeURIComponent(baseUrl)}${
    utmParams.toString() ? `&${utmParams.toString()}` : ''
  }`
}
