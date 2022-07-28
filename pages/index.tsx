import Head from "next/head"
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
    </div>
  )
}

export default Home