export default{
    name:'Awards',
    title:'Awards',
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
            name:'Link',
            title:'Link',
            type:'array',
            of:[{
                type:'string'
            }]
        },
        {
            name:'LinkTitle',
            title:'LinkTitle',
            type:'array',
            of:[{
                type:'string'
            }]
        },
       



    ]
     
}