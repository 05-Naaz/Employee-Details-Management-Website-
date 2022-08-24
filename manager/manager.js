const RegisterAdmin = require('../models/adminRegister')
const RegisterEmployee = require('../models/employeeRegister')
const UserAuth = require('../models/userauth');
const EmployeeAuth = require('../models/employeeauth')

const UnauthorizedAccess = require('../errors/unauthorizedaccess')
const BadRequestError = require('../errors/baderror');

// -------------ADMIN REGISTER-------------------------------

let adminRegister = async (req) => {
  console.log(req.file.filename,"hiiiii")
  let body =  JSON.parse(req.body.body);

  if (!body.firstName || !body.lastName || !body.mobileNumber || !body.password || !body.gender ||!req.file) {
    throw new BadRequestError("Please Enter all the details")
  }
  let admin = {
    firstName: body.firstName,
    lastName: body.lastName,
    mobileNumber: body.mobileNumber,
    email: body.email,
    password: body.password,
    gender: body.gender,
    image:req.file.filename,
  }
  let creatAdmin =  await RegisterAdmin.create(admin);
  let authtoken = { token: Math.random(10), adminid: creatAdmin.id }
  return await UserAuth.create(authtoken);
}
// ------------------------ADMIN LOGIN & Employee cannot access admin api-------------------

let adminLogin = async (body) => {
  if (!body.email) {
    throw new BadRequestError("Provide email");
  }
  if (!body.password) {
    throw new BadRequestError("Provide Password");
  }
  let findData = {};
  findData["$or"] = [
    { email: { $eq: body.email } }
  ]
  findData["$and"] = [
    { password: { $eq: body.password } },
  ]
  let admin = await RegisterAdmin.findOne({ where: findData, raw: true });
  if(!admin){
    throw new BadRequestError("invalid password or email");
  }
  let loginToken =  Math.random(10)
  let b = await UserAuth.update({token : loginToken}, { where: { adminid: admin.id } });
  let token = loginToken;
  return {token}

}
// get all employees
let getEmpList = async () => {
  let emp = await RegisterEmployee.findAll({ raw: true })
  return { emp};
}

// ----------------EMPLOYEE REGISTER(BY ADMIN)------------

let employeeRegister = async (req) => {
  console.log(req.file.filename,"hiiiii")
  let body =  JSON.parse(req.body.body);

  if (!body.firstName || !body.lastName || !body.mobileNumber || !body.password || !body.gender ||!req.file ) {
    throw new BadRequestError("Please Enter all the details")
  }
  let creatEmployee= {
    firstName: body.firstName,
    lastName: body.lastName,
    mobileNumber: body.mobileNumber,
    email: body.email,
    password: body.password,
    address: body.address,
    gender: body.gender,
    experience: body.experience,
    designation: body.designation,
    salary: body.salary,
    image:req.file.filename,
  }
  let createEmp =  await RegisterEmployee.create(creatEmployee);
  let authtoken = { token: Math.random(10), employeeid: createEmp.id }
  return await EmployeeAuth.create(authtoken);
  
}


// ------------------EMPLOYEE LOGIN--------------

let employeeLogin = async (body) => {
  if (!body.email) {
    throw new BadRequestError("Provide email");
  }
  if (!body.password) {
    throw new BadRequestError("Provide Password");
  }
  let findData = {};
  findData["$or"] = [
    { email: { $eq: body.email } }
  ]
  findData["$and"] = [
    { password: { $eq: body.password } },
  ]
  let findEmployee = await RegisterEmployee.findOne({ where: findData, raw: true });

  if (!findEmployee) {
    throw new UnauthorizedAccess("Access denied");
  }

  let loginToken =  Math.random(10)
  let b = await EmployeeAuth.update({token : loginToken}, { where: { employeeid: findEmployee.id } });
  let empid = findEmployee.id
  let token = loginToken;
  return {token,empid}

}
// GET ALL EMPLOYEE DETAILS IN LIST

let getEmpDetails = async (id) => {
  console.log(id)
  let empData = await RegisterEmployee.findOne({ where: { id: id }, raw: true });
  console.log(empData)
  return { empData }

}

//  -------------UPDATE EMPLOYEE(BY ADMIN and EMPLOYEE)------------------

let updateEmployee = async (req, id) => {
  let body =  JSON.parse(req.body.body,id);
  let updateEmp = {
    firstName: body.firstName,
    lastName: body.lastName,
    mobileNumber: body.mobileNumber,
    email: body.email,
    password: body.password,
    address: body.address,
    gender: body.gender,
    experience: body.experience,
    designation: body.designation,
    salary: body.salary,
    image:req.file.filename
  }
  let update = await RegisterEmployee.update(updateEmp, { where: { id: id } })
  return update;

}

// ----------------DELETE EMPLOYEE(BY ADMIN)------------

let deleteEmployee = async (id) => {
  let deleteEmp = await RegisterEmployee.destroy({ where: { id: id } })
  let deleteToken = await EmployeeAuth.destroy({ where: { id: id } })
  return deleteToken;

}

module.exports = {
  adminRegister,
  adminLogin,
  getEmpList,
  employeeRegister,

  updateEmployee,
  getEmpDetails,

  deleteEmployee,
  employeeLogin,
 


}