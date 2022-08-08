export default{
    name:'Organizers',
    title:'Organizers',
    type:'document',
    fields:[
        {
            name:'Name',
            title:'Name',
            type:'string'
        },
        {
            name: 'images',
            title: 'Images ',
            type: 'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'Link',
            title:'Link',
            type:'string',
        }
    
    ]
     
}