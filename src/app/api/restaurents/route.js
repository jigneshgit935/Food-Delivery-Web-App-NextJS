import connectMongoDB from "@/app/lib/db";
import { restaurentSchema } from "@/app/lib/restaurentModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const data = await restaurentSchema.find();

    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Error while fetching data:", error);
    return NextResponse.error(new Error("Failed to fetch data"));
  }
}

export async function POST(request) {
  let payload = await request.json();
  await connectMongoDB();
  let result;
  let success = false;
  if (payload.login) {
    result = await restaurentSchema.findOne({
      email: payload.email,
      password: payload.password,
    });
    if (result) {
      success = true;
    }
  } else {
    const restaurant = new restaurentSchema(payload);
    result = await restaurant.save();
    if (result) {
      success = true;
    }
  }

  return NextResponse.json({ result: result, success });
}
