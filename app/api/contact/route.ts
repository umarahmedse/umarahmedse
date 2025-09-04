import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    // Parse request body
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Load environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const emailTo = process.env.EMAIL_TO
    if (!emailUser || !emailPass || !emailTo) {
      return NextResponse.json(
        { error: "Email configuration is missing" },
        { status: 500 }
      )
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: emailUser, pass: emailPass },
    })

    // Verify transporter connection
    try {
      await transporter.verify()
    } catch (err: any) {
      return NextResponse.json(
        {
          error: "SMTP connection failed",
          suggestion:
            err.code === "EAUTH"
              ? "Invalid Gmail credentials. Use a valid Gmail App Password."
              : "Check your Gmail SMTP configuration.",
          details: err.message,
        },
        { status: 500 }
      )
    }

    // Email options
    const mailOptions = {
      from: emailUser,
      to: emailTo,
      subject: `📩 New Message from ${name}: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message,
      },
      { status: 500 }
    )
  }
}
