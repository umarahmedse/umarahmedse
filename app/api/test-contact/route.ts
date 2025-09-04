import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // Simulate successful email processing without actually sending
    console.log("[v0] Test contact form submission:", { name, email, subject, messageLength: message?.length })

    return NextResponse.json({
      success: true,
      message: "Test successful - API is working correctly",
      data: { name, email, subject, messagePreview: message.substring(0, 50) + "..." },
    })
  } catch (error: any) {
    return NextResponse.json({ error: "Test failed", details: error.message }, { status: 500 })
  }
}
