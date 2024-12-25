import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundUser = await User.findOne({ _id: id });
  return NextResponse.json({ foundUser }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const userData = body.formData;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updateUserData = await User.findByIdAndUpdate(id, {
      ...userData,
    });

    return NextResponse.json({ message: "User updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
