import connectDb from "@/middleware/mongoose"
import Student from "@/model/Student"

const handler = async (req,res)=>{
  let students =await Student.find()
  res.status(200).json({students})

}

export default connectDb(handler)
 