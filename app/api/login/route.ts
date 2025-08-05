import { NextResponse } from "next/server";

type BodyRequest = {
	username: string;
	password: string;
};

export async function POST(req: Request) {
	try {
		const body: BodyRequest = await req.json();
		const { username, password } = body;

		if (username === "admin" && password === "admin123") {
			const response = NextResponse.json({ success: true }, { status: 200 });
			response.cookies.set("session", "admin-auth");
			return response;
		}

		return NextResponse.json({ success: false }, { status: 401 });
	} catch (error) {
		console.error(error);
		return new Response(null, { status: 500 });
	}
}
