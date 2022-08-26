import Head from "next/head";
import Header from './Header'
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Copyright from "./Copyright";
function Layout({ children }) {
  const styles = {
    // display: "flex",
    position: "relative",width: "100%",
    height: "auto",
    clear: "both",
    float: "left"
    // flexDirection: "column"
  };
  return (
    <div style={styles}>
        <MobileMenu/>
        <Header/>
        <main>
          {children}
        </main>
        <Footer />
        <Copyright/>
    </div>
  )
}

export default Layout