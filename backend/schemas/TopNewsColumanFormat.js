export default{
    name:'Tops_News_Columan_Format',
    title:'Tops_News_Columan_Format',
    type:'document',
    fields:[
        {
            name:'date',
            title:'Date',
            type:'string'
        },
        {
            name: 'imagesGallery',
            title: 'Images gallery',
            type: 'array',
            of: [{
                type: 'image' }],
            options:{
                hotspot:true,
            }
        },
        {
            name:'decription',
            title:'Decription',
            type:'string'
        },
        {
            name:'link',
            title:'Link',
            type:'string'
        }




    ]
     
}