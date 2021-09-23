import App from 'next/app'
import { appWithTranslation } from 'next-i18next'

export let globalI18n

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
        locale: router.locale,
      })
    }

    if (pageProps._nextI18Next) {
      console.log("setting global i18n in get Initial props")
      globalI18n = { _nextI18Next: pageProps._nextI18Next }
    }

    return {
      pageProps,
      locale: router.locale,
      path: ctx.asPath,
    }
  }

  componentDidMount() {
    console.log("setting global i18n in component did mount")
    globalI18n = { _nextI18Next: this.props.pageProps._nextI18Next }
  }

  render() {
    let { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default appWithTranslation(MyApp)
