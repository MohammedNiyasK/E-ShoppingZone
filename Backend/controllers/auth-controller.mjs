import bcrypt from 'bcrypt'
import {dbo} from '../model/config/connection.mjs'
const {getDb} = dbo

const getAuthRouter = async (req,res)=>{
    
    const db = getDb()

    const {user,password} = req.body

    console.log(req.body)

    if(!user || !password) return res.status(400).json({message:'username and password are required'})

    try {
        const foundUser = await db.collection('register').findOne({'username':user})

        console.log(foundUser)

        if(!foundUser) return res.status(401).json({message:'No user found'})

        const hashedPwd = foundUser.password

        const match = await bcrypt.compare(password,hashedPwd)

        if(match){
            res.json({foundUser})
        }
    } catch (error) {
        res.send(`error:${error.message}`)
    }
}

export default getAuthRouter;
