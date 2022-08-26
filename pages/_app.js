import '../styles/reset.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'
import Home from './index'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
