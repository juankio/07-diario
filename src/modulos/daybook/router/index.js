export default{
    name:'daybook',
    component:()=>import('@/modulos/daybook/layouts/DayBookLayout.vue'),
    children:[
        {
            path:'',
            name:'no-entry',
            component:()=>import('@/modulos/daybook/views/NoEntrySelecte.vue')
        },
        {
            path:':id',
            name:'entry',
            component:()=>import('@/modulos/daybook/views/EntryView.vue')
        }
    ]
}