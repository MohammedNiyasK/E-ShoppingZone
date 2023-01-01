import jwt from 'jsonwebtoken'
import { dbo } from '../model/config/connection.mjs'
const {getDb} = dbo
import dotenv from 'dotenv'
dotenv.config()

const handleRefreshToken = async (req,res) =>{
    const db = getDb()
    const cookies = req.cookies   
    console.log(cookies)
    if(!cookies?.jwt) return res.sendStatus(401)
    const refreshToken =cookies.jwt
    

    try {
        const foundUser= await db.collection('register').findOne({'refreshToken':refreshToken})
        console.log(foundUser)
       
        if(!foundUser){
            return res.sendStatus(403)
        }

        //evaluate jwt
        jwt.verify(refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err,decoded) =>{
                console.log(decoded)
                if(err || foundUser.username !== decoded.username) return res.sendStatus(403)

                const accessToken = jwt.sign({
                    "userInfo":decoded.username
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:"30s"})
res.json({accessToken})
            })
    } catch (error) {
        
    }

    
}

export default handleRefreshToken;