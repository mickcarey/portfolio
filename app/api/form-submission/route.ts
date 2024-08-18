import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request);
  const response = new NextResponse();


  return Response.json({
    hello: 'world'
  });
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const name = data.get('name');

  console.log(data.get('name'));

  return Response.json({
    name
  });
}