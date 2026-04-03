import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body?.name || !body?.email || !body?.subject || !body?.message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ error: "Server misconfiguration: missing env vars." }, { status: 500 });
    }

    const text = `📩 Yangi xabar:\n👤 Ism: ${body.name}\n📧 Email: ${body.email}\n📌 Mavzu: ${body.subject}\n💬 Xabar: ${body.message}`;

    const tgResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    });

    if (!tgResponse.ok) {
      const errorText = await tgResponse.text();
      console.error("Telegram API failure:", errorText);
      return NextResponse.json(
        { error: "Telegram bot request failed", details: errorText },
        { status: 502 },
      );
    }

    return NextResponse.json({ status: "sent" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
