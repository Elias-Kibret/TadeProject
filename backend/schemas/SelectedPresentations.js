export default{
    name:'SelectedPresentations',
    title:'SelectedPresentations',
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
            name: 'images',
            title: 'Images ',
            type: 'image',
            options:{
                hotspot:true,
            }
        },

        {
            name:'Year',
            title:'Year',
            type:'number'
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