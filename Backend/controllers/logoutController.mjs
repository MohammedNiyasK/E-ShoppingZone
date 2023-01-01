
import jwt from 'jsonwebtoken'
import { dbo } from '../model/config/connection.mjs'

const {getDb} =dbo

const handelLogout = async (req,res) =>{
    const db = getDb()
    const cookies = req.cookies
    if( !cookies?.jwt) return res.sendStatus(204)
    const refreshToken = cookies.jwt

    try {
        const foundUser = await db.collection('register').findOne({refreshToken})

        if(!foundUser) {
            res.clearCookie('jwt',{
                httpOnly:true,sameSite:'None',Secure:true
            })
            return res.sendStatus(204)
        }

        /* Delete refreshToken from DB */

        await db.collection('register').updateOne({refreshToken},{$unset:{refreshToken:''}})

        res.json({'message':'User logout succesfully'})
        
    } catch (error) {
        console.error(`Error : ${error}`)
    }
}

export default handelLogout;