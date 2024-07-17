import connectDb from "@/middleware/mongoose"
import Newsletter from "@/model/Newsletter"
const handler = async (req,res)=>{
  let subscribers =await Newsletter.find()
  res.status(200).json({subscribers})

}

export default connectDb(handler)
 