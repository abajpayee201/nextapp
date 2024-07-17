import connectDb from "@/middleware/mongoose"
import Counselling from "@/model/Counselling"
const handler = async (req,res)=>{
  let counsellings =await Counselling.find()
  res.status(200).json({counsellings})

}

export default connectDb(handler)
 