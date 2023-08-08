const allowedRoles= require('../src/roles_list')

const verifyRoles = (role) => {
    return ( res) => {
        if (!role) return res.send({  status: 401, message: 'Invalid role'})
        const rolesArray = [allowedRoles];
       for (let i=0; i<rolesArray; i++) {
           if (role !== rolesArray[i]&&i===rolesArray.at(rolesArray.length-1)) return res.send({status: 401, message: 'Invalid Role'})
       }
    }
}
module.exports = verifyRoles;