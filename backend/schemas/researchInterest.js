export default{
    name:'ResearchInterest',
    title:'ResearchInterest',
    type:'document',
    fields:[
        {
            name:'Title',
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
            name:'description',
            title:'Description',
            type:'string'
        }




    ]
     
}