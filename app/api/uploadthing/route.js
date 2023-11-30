import {createNextRouteHandler} from 'uploadthing/next'
import { ourFileRouter } from './core';

const f = createUploadthing();

//FileRouter for your app, can contain multiple file
export const {GET, POST} = createNextRouteHandler ({
    router: ourFileRouter,
})