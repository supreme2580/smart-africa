import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Results from "../components/Results"
import { sanityClient } from "../sanity"
import { NavItems } from "../typings"

interface Props {
  navItems: [NavItems]
}

const Home = ({ navItems }: Props) => {
  return (
    <div>
      <Head>
        <title>Smart Africa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar navItems={navItems} />
      <Results />
      <Footer />
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `
  *[_type == "segments"]{
    segment_name,
    segment {
      current
    }
  }
  `
  const navItems = await sanityClient.fetch(query)

  return {
      props: {
          navItems,
      }
  }
}