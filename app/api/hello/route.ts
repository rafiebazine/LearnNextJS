import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: 'Hello API' });
}


export async function POST(req: Request) {
    const data = await req.json();
    const { name, age } = data;

    return NextResponse.json({
        message: `Hello ${name}, age: ${age} this was sent by api req`,
    });
}