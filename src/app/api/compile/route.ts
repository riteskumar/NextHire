import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientId: process.env.NEXT_PUBLIC_JDOODLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_JDOODLE_CLIENT_SECRET,
        script: body.code,
        language: body.language,
        versionIndex: "0",
        stdin: body.input
      })
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to compile code' }, { status: 500 });
  }
}