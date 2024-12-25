import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await User.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    await User.create(userData);

    return NextResponse.json({ message: "Create User" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
