const isDataExists = async(email)=>{

}
const findData = async (id , schema)=>{
    try {
       const result = await schema.findById(id)
       return result
    } catch (error) {
        return false        
    }
}

const addData = async(info , schema)=>{
        try {
            const db = new schema(info)
            await db.save()
            return true
        } catch (err) {
                      
                return false
        }
}

const updateData = async(id, updateObj , schema)=>{
    try {
        await schema.findByIdAndUpdate(id,{$set:updateObj})
        return true
    } catch (error) {
        return false
    }
    
}

const deleteData = async(id , schema)=>{
    try {   
        await schema.findByIdAndDelete(id)
        return true 
    } catch (error) {
        return false
    }
} 

module.exports={addData, updateData , deleteData}
