import connectDb from "@/middleware/mongoose"
import Student from "@/model/Student"

const handler = async (req, res) => {

   
    if (req.method == "POST") {

        let p = new Student({
            name: req.body.clname,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.clmobile,
            dob: req.body.dateofbirth,
            pincode: req.body.custPincode,
            year: req.body.custTey,
        })

        await p.save()

        res.redirect(307, '/thankyou')
    }
    else {

        res.status(400).json({ error: "this method is not allowed" })
    }


}

export default connectDb(handler)
