import connectDb from "@/middleware/mongoose"
import Newsletter from "@/model/Newsletter"
const handler = async (req, res) => {

   
    if (req.method == "POST") {

        let p = new Newsletter({
           
            email: req.body.email,
           
        })

        await p.save()

        res.redirect(307, '/thankyou')
    }
    else {

        res.status(400).json({ error: "this method is not allowed" })
    }


}

export default connectDb(handler)
