export default{
    name:'SelectedAwards',
    title:'SelectedAwards',
    type:'document',
    fields:[
        {
            name:'date',
            title:'Date',
            type:'string'
        },
        {
            name:"Title",
            title:'Title',
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