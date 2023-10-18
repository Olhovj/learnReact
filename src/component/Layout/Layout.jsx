import Header from '../Header/Header'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-layout">{children}</main>
    </>
  )
}

export default Layout
