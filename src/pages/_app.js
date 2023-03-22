import '@/styles/globals.css'
import Login from './_login'
import Create from './_create'
import Registration from './_register'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/create" component={Create} />
      <Route path="/register" component={Registration} />
     
    </Routes>
    </>
  )
}
