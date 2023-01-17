module.exports = {

    list: async (req, res) =>{

    },

    create: async  (req, res) =>{

    }, 
    
    test: async ( req, res)=>{
        try{
            res.json('Anda')
        }
        catch(error){
            console.log(error)
        }
    }
}