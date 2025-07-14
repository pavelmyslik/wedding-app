import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const data = await request.json();

    try {
        const created = await prisma.rSVP.create({
            data: {
                name: data.name,
                message: data.message,
                attendance: data.attendance
            },
        });
        return NextResponse.json(created, { status: 201 });
    } catch (e) {
        const err = e as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
