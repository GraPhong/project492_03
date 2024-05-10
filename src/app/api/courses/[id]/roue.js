import connectMongoDB from "@/libs/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";



export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const course = await Course.findOne({ _id: id });
  return NextResponse.json({ course }, { status: 200 });
}