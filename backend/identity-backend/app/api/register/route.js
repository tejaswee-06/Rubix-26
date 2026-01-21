import { createAccount } from "@/lib/account-manage";

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8080",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, realName } = body;

    console.log("REGISTER HIT:", email, realName);

    const userId = await createAccount({ email, password, realName });

    return new Response(
      JSON.stringify({ userId }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8080",
        },
      }
    );
  } 

catch (err) {
  console.error("REGISTER ERROR:", err);

  const message = err?.message || "Internal server error";
  const status =
    message === "Account already exists" ? 409 : 500;

  return new Response(
    JSON.stringify({ error: message }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
      },
    }
  );
}
}
