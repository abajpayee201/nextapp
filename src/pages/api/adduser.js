import connectDb from "@/middleware/mongoose"
import User from "@/model/User"

const handler = async (req, res) => {

   
    if (req.method == "POST") {

        let p = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            city: req.body.city,
            pincode: req.body.pincode,
        })

        await p.save()

        res.redirect(307, '/thankyou')
    }
    else {

        res.status(400).json({ error: "this method is not allowed" })
    }


}

export default connectDb(handler)
