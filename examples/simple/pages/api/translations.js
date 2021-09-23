import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const handler = async (req, res) => {
  console.log('locale', req.query.locale)
  const translations = await serverSideTranslations(req.query.locale || 'en', [
    'common',
    'second-page',
    'footer',
  ])
  res.status(200).json(translations)
}

export default handler
