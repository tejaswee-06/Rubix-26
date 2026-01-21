import { cleanEmail, cleanString } from "@/lib/clean-input";
import { authenticateUser } from "@/lib/authenticate";
import { trackSession } from "@/lib/log-state";

export async function POST(req) {
  const body = await req.json();

  const email = cleanEmail(body.email);
  const password = cleanString(body.password);

  const user = await authenticateUser(email, password);
  if (!user) return new Response("Unauthorized", { status: 401 });

  if (!trackSession(user.id, req)) {
    return new Response("Session rejected", { status: 403 });
  }

  return Response.json({ userId: user.id });
}
