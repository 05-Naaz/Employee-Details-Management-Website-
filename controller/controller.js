const sequelize = require('sequelize')
const manager = require('../manager/manager')

// -------------------ADMIN REGISTER--------------------------

let adminRegister = async (req, res, next) => {
    return manager.adminRegister(req)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);
        })
        .catch(next);
}

// ------------ADMIN LOGIN--------

let adminLogin = async (req, res, next) => 
{
  return manager.adminLogin(req.body)
   .then(data => {
    let result = {
        status: 200,
        token:data.token
    }
    return res.json(result);
}).catch(next);
}

let getEmpList = async (req, res, next) => {
    return manager.getEmpList(req.body)
        .then(data => {
            let result = {
                status: 200,
                emp: data.emp,
            }
            return res.json(result);
        })
        .catch(next);
}

//  ----------------EMPLOYEE REGISTER----------------

let employeeRegister = async (req, res, next) => {

    return manager.employeeRegister(req)
        .then(data => {

            let result = {
                status: 200,
                data: data
            }
            return res.json(result);
        })
        .catch(next);
}

//   ----------------------EMPLOYEE---------------------

let employeeLogin = async (req, res, next) => {
    return manager.employeeLogin(req.body)
        .then(data => {
            let result = {
                status: 200,
                token: data.token,
                id:data.empid

            }
            return res.json(result);
        })
        .catch(next);

}


// -------------DELETE EMPLOYEE(BY ADMIN)------------

let deleteEmployee = async (req, res, next) => {
    return manager.deleteEmployee(req.params.id)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);

        }).catch(next);
}

// -------------UPDATE EMPLOYEE(BY ADMIN)------------
let updateEmployee = async (req, res, next) => {
    return manager.updateEmployee(req.body, req.params.id)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);

        }).catch(next);
}
let getEmpDetails = async (req, res, next) => {
    return manager.getEmpDetails(req.params.id)
        .then(data => {
            let result = {
                status: 200,
                emp:data.empData
            }
            return res.json(result);
        }).catch(next);
}
// ------------EMPLOYEE EDIT PROFILE---------------------

let EmployeeEditProfile = async (req, res, next) => {
    return manager.EmployeeEditProfile(req,req.params.id)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);

        }).catch(next);
}

// --------------EMPLOYEE PROFILE(PAGINATION)---------------

let getEmployeeProfile = async (req, res, next) => {
    return manager.getEmployeeProfile(req)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);

        }).catch(next);
}




module.exports = {
    adminRegister: adminRegister,
    adminLogin: adminLogin,

    getEmpList:getEmpList,
    
    employeeRegister: employeeRegister,
    employeeLogin: employeeLogin,

    updateEmployee: updateEmployee,
    getEmpDetails: getEmpDetails,

    deleteEmployee: deleteEmployee,

}