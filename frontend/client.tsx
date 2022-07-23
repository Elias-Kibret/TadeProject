import sanityCilent from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
type imageUrlBuilder = ReturnType<typeof imageUrlBuilder>;

export const client=sanityCilent({
    projectId:'6rjxy7wo',
    dataset:'production',
    apiVersion:'2022-07-22',
    useCdn:true,
    token:process.env.TOKEN
})
const bulider=imageUrlBuilder(client);

export const urlFor=(source:any)=>bulider.image(source)