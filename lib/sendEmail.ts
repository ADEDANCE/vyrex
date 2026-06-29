import { Resend } from "resend";

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    // Resend instance
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("📧 Sending email to:", email);
    const result = await resend.emails.send({
      from: "VYREX <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to VYREX ",
      html: `
        <h1>Welcome ${name}!</h1>

        <p>
          Thank you for joining VYREX.
        </p>

        <p>
          Your video editing journey starts now.
        </p>

        <p>
          Log in and begin your first lesson.
        </p>
      `,
    });

    console.log("EMAIL SENT:", result);
  } catch (error) {
    console.error("EMAIL ERROR:", error);
  }
}

export async function sendCourseAccessEmail(
  email: string,
  name: string,
  level: string,
) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "VYREX <onboarding@resend.dev>",
      to: email,
      subject: `Your ${level} Level Access is Ready 🚀`,
      html: `
      <h1>Hello ${name},</h1>

<p>Payment confirmed successfully! 🎉</p>

<p>
You now have access to the
<strong>${level}</strong> Level.
</p>

<ul>
<li>Lessons</li>
<li>Resources</li>
<li>Practical Exercises</li>
</ul>

<p>
Login to continue learning.
</p>`,
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
  }
}

export async function sendCertificateEmail(
  email: string,
  name: string,
  level: string,
  courseLink: string,
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "VYREX <onboarding@resend.dev>",
    to: email,
    subject: "Congratulations! You've Earned Your Certificate 🎉",
    html: `
      <div>
        <h1>Congratulations ${name} 🎉</h1>

        <p>
          You have successfully completed the <strong>${level}</strong> level.
        </p>

        <p>
          Your certificate is now ready.
        </p>

        <a href="${courseLink}" style="padding:10px 15px;background:#2563eb;color:white;text-decoration:none;border-radius:6px;">
          View Certificate
        </a>

        <p>Keep learning and keep building 🚀</p>
      </div>
    `,
  });
}

export async function sendForgotPasswordEmail(
  email: string,
  resetLink: string,
  name: string,
) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "VYREX <onboarding@resend.dev>",
      to: email,
      subject: `Reset Your Vyrex Password`,
      html: `
      <h1>Hello ${name},</h1>

<p>We received a request to reset your password.</p>

<p>
Click the button below to create a new password.
</p>

<a
  href="${resetLink}"
  style="
    display:inline-block;
    padding:12px 20px;
    background:#2563eb;
    color:#ffffff;
    text-decoration:none;
    border-radius:6px;
    font-weight:bold;
  "
>
  Reset Password
</a>

<p>
If you didn't request this, you can safely ignore this email.
</p>
<p>
This link expires in 15 minutes.
</p>
`,
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
  }
}
