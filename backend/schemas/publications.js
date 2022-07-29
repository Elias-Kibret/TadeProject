export default{
    name:'Publications',
    title:'Publications',
    type:'document',
    fields:[
        {
            name:'Title',
            title:'Title',
            type:'string'
        },
        {
            name:'Authors',
            title:'Authors',
            type:'array',
            of:[{
                type:'string'
            }]
        },
        
        {
            name:'Journal',
            title:'Journal',
            type:'string'
        },
        {
            name:'Journal_Link',
            title:'Journal_Link',
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
        // {
        //     name:'Pages',
        //     title:'Pages',
        //     type:'string'
        // },
        {
            name:'Year',
            title:'Year',
            type:'number'
        },
        {
            name:'Description',
            title:'Description',
            type:'string'
        },
        // {
        //     name:'Citeas',
        //     title:'CiteAs',
        //     type:'string'
        // },
        {
            name:'Link',
            title:'Link',
            type:'array',
            of:[{
                type:'string'
            }]
        }




    ]
     
}