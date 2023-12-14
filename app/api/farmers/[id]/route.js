import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET (request, {params:{id}}){
    try{
        const farmer = await db.user.findUnique({
            where : {
                id,
                role : "FARMER",
            },
        });
        return NextResponse.json(farmer)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to Fetch Farmer",
            error
        }, {status:500})
    }
}