export default{
    name:'SelectedPresentations',
    title:'SelectedPresentations',
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
            name:'Title',
            title:'Title',
            type:'string'
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
        ,{
            name:'Year',
            title:'Year',
            type:'number'
        }
    ]
     
}