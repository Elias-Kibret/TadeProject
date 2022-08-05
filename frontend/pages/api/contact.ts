// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../client'

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) { 
    const {name,email,text,subject}=JSON.parse(req.body)
try {
      await client.create({
        _type:'Contact',
        name,
        email,
        text,
        subject
        
      })   
    } catch (error) {
      console.log(error)
      return res.status(500).json({message:`Couldn't submit comment`, error})
    }
    console.log('Submitted')
  res.status(200).json({ message:`Comment submitted` })
}
