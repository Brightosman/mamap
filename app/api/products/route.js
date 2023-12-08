import { NextResponse } from "next/server";

export async function POST(request){
    {/*
        -id
        -title
        -slug
        -description
        -image
        -sku
        -barcode
        -productPrice
        -salePrice
        -category
        -farmer
        -tag[]
         */}
    try {
        const productData= await request.json();
        console.log("New Product / productData" , productData)
        return NextResponse.json(productData)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Category",
            error
        }, {status:500})
    }
}