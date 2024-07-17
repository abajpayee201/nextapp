import connectDb from "@/middleware/mongoose"
import Student from "@/model/Student"

const handler = async (req, res) => {


    if (req.method == "POST") {

        let s = await Student.findOne({ "email": req.body.username })
        if (s) {
            if (req.body.username == s.email && req.body.loginpassword == s.password) {
                res.redirect(307, '/profile')            }
            else {
                // res.status(200).json({ success: false, error: "invalid credentials" })

            }
        }
        else {
            // res.status(200).json({ success: false, error: "no user found" })

        }

        
    }
    else {

        res.status(400).json({ error: "this method is not allowed" })
    }


}

export default connectDb(handler)
