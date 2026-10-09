export default {
  cmsUrl: process.env.CMS_URL != undefined ? process.env.CMS_URL : '',
  siteUrl:
    process.env.PUBLIC_SITE_URL != undefined ? process.env.PUBLIC_SITE_URL : '',
}
