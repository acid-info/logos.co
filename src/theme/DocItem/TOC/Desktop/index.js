import React from 'react'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { useDoc } from '@docusaurus/theme-common/internal'
import TOC from '@theme/TOC'
import { useLocation } from '@docusaurus/router'
import StickyImage from '../../../../components/StickyImage/StickyImage'

export default function DocItemTOCDesktop() {
  const { toc, frontMatter } = useDoc()
  const location = useLocation()

  const showStickyImage =
    location.pathname === '/farewell-to-westphalia' ||
    location.pathname === '/farewell-to-westphalia/'

  return showStickyImage ? (
    <StickyImage />
  ) : (
    <TOC
      toc={toc}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={ThemeClassNames.docs.docTocDesktop}
    />
  )
}
