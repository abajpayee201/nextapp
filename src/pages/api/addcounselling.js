import connectDb from "@/middleware/mongoose"
import Counselling from "@/model/Counselling"
const handler = async (req, res) => {

   
    if (req.method == "POST") {

        let p = new Counselling({
           
            mobile: req.body.mobile,
           
        })

        await p.save()

        res.redirect(307, '/thankyou')
    }
    else {

        res.status(400).json({ error: "this method is not allowed" })
    }


}

export default connectDb(handler)
