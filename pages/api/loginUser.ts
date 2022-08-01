// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from '@sanity/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "v2021-10-21",
    token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config)

export default async function loginUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  const userData = {
    _type: 'user',
    user: data,
    address: req.headers["x-real-ip"]
  }
  try {
    await client.create(userData);
  }
  catch(error) {
    console.log(`Not logged in ${data}`)
    return res.status(500).json({ message: 'Could not login to server' })
  }
  console.log(`Logged in ${data}`)
  res.status(200).json({ message: `Logged in ${data} ${req.headers["x-real-ip"]}` })
}
