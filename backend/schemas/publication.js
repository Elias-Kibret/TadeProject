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
            name:'Vol',
            title:'Vol',
            type:'string'
        },
        {
            name:'Pages',
            title:'Pages',
            type:'string'
        },
        {
            name:'Year',
            title:'Year',
            type:'number'
        },
        {
            name:'Citeas',
            title:'CiteAs',
            type:'string'
        },
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