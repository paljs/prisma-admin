import { NextApiRequest, NextApiResponse } from 'next'
//import { getUserId } from '../utils'
import prisma from './prisma'

export interface Context {
  prisma: typeof prisma
  userId?: number
  select: any
  req: NextApiRequest
  res: NextApiResponse
}

export async function createContext(req: NextApiRequest, res: NextApiResponse): Promise<Context> {
  return {
    req,
    res,
    prisma,
    //userId: getUserId(req),
    select: {},
  }
}
