
const RegisterAdmin = require('../models/adminRegister')
const RegisterEmployee = require('../models/employeeRegister')
const Userauth = require('../models/userauth')
const EmployeeAuth = require('../models/employeeauth')
const BadRequestError = require('../errors/baderror');

// --------------ADMIN Validation------------
let validateUser = async (req, res, next) => {
  
  console.log(req.headers.token)
  try{
  let token = req.headers.token
  let admin = await Userauth.findOne({ where: { token: token }, raw: true });
  let employee = await EmployeeAuth.findOne({ where: { token: token }, raw: true });

  if (!admin && !employee) {
    throw new BadRequestError("User Invalid")
  }

  next()
  }catch (e) {
    console.log(e);
    next(e);
}
}












// let validateUser = async (req, res, next) => {
//   console.log(req.headers.token)
//   try{
//   let token = req.headers.token
//   let user = await Userauth.findOne({ where: { token: token }, raw: true });
//   console.log(user);
//   if (!user) {
//     throw new BadRequestError("User Invalid")
//   }
//   let isExist = await RegisterAdmin.findOne({ where: { id: user.adminid }, raw: true });
//   if (!isExist) {
//     throw new BadRequestError("entry not valid")
//   }
//   req.adminid = isExist.id
//   next()
//   }catch (e) {
//     console.log(e);
//     next(e);
// }
// }



// --------------EMPLOYEE Validation-----------

let isValidateEmployee = async (req, res, next) => {
  console.log(req.headers.token)
  try{
  let token = req.headers.token
  let user = await EmployeeAuth.findOne({ where: { token: token }, raw: true });
  console.log(user);
  if (!user) {
    throw new BadRequestError("Admin Invalid")
  }
  req.a = user.employeeid
  let findData = { id: req.a }
  let isExist = await employeeRegister.findOne({ where: findData, raw: true });
  if (!isExist) {
    throw new BadRequestError("invalid employee")
  }
  req.employeeid = isExist.adminId
  next()  
}catch (e) {
  console.log(e);
  next(e);
}
}
module.exports = {
  validateUser, isValidateEmployee
}

