import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Results from "../components/Results"
import { sanityClient } from "../sanity"
import { NavItems, Result } from "../typings"
import { GetServerSideProps } from "next"
import Image from "next/image"

interface Props {
  navItems: [NavItems],
  result: [Result]
}

const Home = ({ navItems, result }: Props) => {

  return (
    <div>
      <Head>
        <title>Smart Africa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar navItems={navItems} />
      {
        result.length > 0 ? <Results result={result} /> : <div className="text-center absolute top-[50%] inset-x-0 text-2xl"><div className="flex flex-col space-y-2"><div><Image src="/sad.png" width={100} height={100} /></div><h1>No Files Found</h1></div></div>
      }
      <Footer toBottom={result.length > 0 ? true : false} />
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

const segment = context.query.segment?.toString().toLocaleLowerCase() || "english language"

  const queryNav = `
  *[_type == "segments"]{
    segment_name,
    _id
  }
  `

  const queryRes = `
  *[_type == "post" && segments == "${segment}"]{
    _id,
    title,
    thumbnail,
    description,
    url,
    given,
    reward
  }
  `

  const navItems = await sanityClient.fetch(queryNav)
  const result = await sanityClient.fetch(queryRes)

  return {
      props: {
          navItems,
          result
      }
  }
}