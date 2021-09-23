import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { globalI18n } from './_app'

const SecondPage = (props) => {
  const { t } = useTranslation('second-page')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <Link href='/'>
          <button type='button'>{t('back-to-home')}</button>
        </Link>
      </main>
      <Footer />
    </>
  )
}

SecondPage.getInitialProps = async ({ locale }) => {
  let translations
  if (globalI18n) {
    translations = globalI18n
  } else {
    const res = await fetch(
      `http://localhost:3000/api/translations?locale=${locale}`
    )
    const json = await res.json()
    translations = json
  }

  return {
    ...translations,
  }
}

export default SecondPage
