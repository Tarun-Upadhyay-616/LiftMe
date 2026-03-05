import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('q');

    if (!searchText) return NextResponse.json([]);

    const API_KEY = process.env.LOCATIONIQ_API_KEY; 

    const res = await fetch(
        `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${searchText}&limit=3&format=json`
    );

    if (!res.ok) {
        console.error(`LocationIQ Error: ${res.status}`);
        return NextResponse.json({ error: "Unauthorized" }, { status: res.status });
    }

    const searchResult = await res.json();
    return NextResponse.json(searchResult);
}