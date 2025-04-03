import { NextResponse } from 'next/server';
import { sendInterviewEmail } from '@/lib/emailService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await sendInterviewEmail(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}