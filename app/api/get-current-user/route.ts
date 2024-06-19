import { getUserById } from "@/lib/user";

export async function POST(req: Request) {
  const userId = await req.json();
  if (!userId) {
    throw new Error('You must be signed in to get the current user.')
  }

  const { user, error } = await getUserById(userId)
  if (error) {
    throw new Error('Failed to get the current user.')
  }

  return Response.json({ user })
}