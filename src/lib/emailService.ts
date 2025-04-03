import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";




const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});;

export const sendInterviewEmail = async ({
  to,
  title,
  description,
  date,
  time,
  meetingLink,
}: {
  to: string;
  title: string;
  description: string;
  date: string;
  time: string;
  meetingLink: string;
}) => {
  const meetingDate = new Date(date);
  const formattedDate = meetingDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const emailContent = `
    <h2>Interview Scheduled: ${title}</h2>
    <p>${description}</p>
    <h3>Interview Details:</h3>
    <ul>
      <li>Date: ${formattedDate}</li>
      <li>Time: ${time}</li>
    </ul>
    <p>Join the interview using this link: <a href="${meetingLink}">${meetingLink}</a></p>
    <p>Best regards,<br>NextHire Team</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: `Interview Scheduled: ${title}`,
    html: emailContent,
  });
};
