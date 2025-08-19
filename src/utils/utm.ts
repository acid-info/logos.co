export const createUTMUrl = (
  baseUrl: string,
  source: string = '',
  medium: string = '',
  campaign: string = '',
  content: string = '',
  term: string = '',
): string => {
  const utmParams = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: content,
    utm_term: term,
  })

  return `https://links.logos.co/redirect?redirect=${encodeURIComponent(
    baseUrl,
  )}&${utmParams.toString()}`
}
