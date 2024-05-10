import connectMongoDB from "@/libs/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDB();
  const courses = await Course.find();
  return NextResponse.json({ courses });
}
