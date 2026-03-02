import { NextResponse } from "next/server";

export async function GET(request:any){
    const {searchParams} = new URL(request.url);
    const searchText = searchParams.get('q');
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchText}&format=jsonv2&limit=5`,{
        headers:{
            "Content-Type": "application/json",
            "User-Agent": "LiftMe"
        }
    })
    const searchResult = await res.json();
    return NextResponse.json(searchResult);
}