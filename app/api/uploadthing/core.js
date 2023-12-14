import {createUploadthing} from 'uploadthing/next'

const f = createUploadthing();

//FileRouter for your app, can contain multiple file
export const ourFileRouter = {
    //Define as many FileRoutes as you like, each with a unique routeSlug
    categoryImageUploader: f({ image: {maxFileSize: "1MB"}})
        //Set permission and file types for this FileRoute
        .onUploadComplete(async ({ metadata, file }) =>{
            console.log("file url", file.url, metadata);
            return { uploadedBy: "BI" };
    }),

     bannerImageUploader: f({ image: {maxFileSize: "2MB"}})
        //Set permission and file types for this FileRoute
        .onUploadComplete(async ({ metadata, file }) =>{
            console.log("file url", file.url, metadata);
            return { uploadedBy: "BI" };
    }),

     marketLogoUploader: f({ image: {maxFileSize: "1MB"}})
        //Set permission and file types for this FileRoute
        .onUploadComplete(async ({ metadata, file }) =>{
            console.log("file url", file.url, metadata);
            return { uploadedBy: "BI" };
    }),

    productImageUploader: f({ image: {maxFileSize: "1MB"}})
        //Set permission and file types for this FileRoute
        .onUploadComplete(async ({ metadata, file }) =>{
            console.log("file url", file.url, metadata);
            return { uploadedBy: "BI" };
    }),

    trainingImageUploader: f({ image: {maxFileSize: "1MB"}})
        //Set permission and file types for this FileRoute
        .onUploadComplete(async ({ metadata, file }) =>{
            console.log("file url", file.url, metadata);
            return { uploadedBy: "BI" };
    }),

    farmerProfileUploader: f({ image: {maxFileSize: "1MB"}})
        //Set permission and file types for this FileRoute
        .onUploadComplete(async ({ metadata, file }) =>{
            console.log("file url", file.url, metadata);
            return { uploadedBy: "BI" };
    }),
}