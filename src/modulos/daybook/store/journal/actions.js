import journalApi from '@/api/journalApi';
// export const myAction = async({commit})=>{

// }
export const loadEntries = async({commit})=>{

   const { data } = await journalApi.get('/entries.json')
   const entries = []
   for(let id of Object.keys(data)){
      entries.push({
         id,
         ...data[id]
      })
      
   }
   commit('setEntries', entries)
   
   
}
export const updateEntry = async({commit}, entry)=>{
   const { data, picture, text } =entry
   const dataTosave = {data, picture, text}

    const res =await journalApi.put(`/entries/${entry.id}`.json, dataTosave)
   commit('updateEntry', {...entry})
}
export const createEntry = async(/*{commit}*/)=>{

}

