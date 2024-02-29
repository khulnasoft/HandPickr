import type { KhulnasoftRequest, KhulnasoftResponse } from '@vercel/node'

export default function handler(
  req: KhulnasoftRequest,
  res: KhulnasoftResponse
) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
