import { cleanEmail, cleanString } from "@/lib/clean-input";
import { createAccount } from "@/lib/account-manage";

export async function POST(req) {
  const body = await req.json();

  const email = cleanEmail(body.email);
  const password = cleanString(body.password);
  const realName = cleanString(body.realName);

  const user = await createAccount({ email, password, realName });

  return Response.json({ userId: user.id });
}
