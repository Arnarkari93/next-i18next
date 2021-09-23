import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { globalI18n } from './_app'

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'de' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

Homepage.getInitialProps = async ({ locale }) => {
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

export default Homepage
