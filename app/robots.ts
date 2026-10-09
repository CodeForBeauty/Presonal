import config from '@/utils/config'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  }
}
