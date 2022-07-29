import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Results from "../components/Results"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Smart Africa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar key={1} title="Mathematics" />
      <Results />
      <Footer />
    </div>
  )
}

export default Home