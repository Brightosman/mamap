import {createUploadthing} from 'uploadthing/next'

const f = createUploadthing();

//FileRouter for your app, can contain multiple file
export const ourFileRouter = {
    //Define as many FileRoutes as you like, each with a unique routeSlug
    CategoryImageUploader: f({ image: {maxFileSize: "1MB"}})
        //Set permission and file types for this FileRoute
        .onUploadComplete(async ({ metadata, file }) =>{
            console.log("file url", file.url, metadata);
    }),
}