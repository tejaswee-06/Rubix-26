import { logout } from "@/lib/log-state";
import { deleteFile } from "@/lib/delete-file";

export async function POST(req) {
  const { userId } = await req.json();

  logout(userId);
  deleteFile(userId); // delete all uploaded files

  return new Response("Logged out");
}
