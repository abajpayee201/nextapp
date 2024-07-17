import connectDb from "@/middleware/mongoose"
import User from "@/model/User"

const handler = async (req,res)=>{
  let users =await User.find()
  res.status(200).json({users})

}

export default connectDb(handler)
 