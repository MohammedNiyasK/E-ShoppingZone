
const verifyRole = (...role) => {
    return (req,res,next) => {
        try {
            const roles = req.roles
           console.log(roles)
           const allowedRoles = [...role]
console.log(allowedRoles)

const result = roles.map(role => allowedRoles.includes(role)).find(val => val === true)
console.log(result)
            if(roles.map(role => allowedRoles.includes(role)).find(val => val === true)){
                next()
            }
            else{
                res.status(401).json({message:'unauthorized'})
            }
            
        } catch (error) {
            res.status(401).json({message:error})
        }
    }
}

export default verifyRole;