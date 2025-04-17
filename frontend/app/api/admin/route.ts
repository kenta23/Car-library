import { NextRequest } from "next/server";

export const revalidate = 60;


export async function GET(request: NextRequest) { 
    const res = await fetch('http://localhost:8000/car', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();

    return Response.json(data, {
        status: res.status,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}