const Employee = require('./models/Employee');
const User = require('./models/User');

exports.resolvers = {
    Query: {
        getEmployees: async (parent, args) => {
            return Employee.find({})
        },
        getEmployeeByID: async (parent, args) => {
            return Employee.findById(args.id)
        },
        login: async (parent, args) => {
            return User.find({username:args.username,
                email:args.email,password:args.password})
        },
        getEmployeeByGender: async (parent, args) => {
            return Employee.find({"gender" : args.gender})
        }
    },

    Mutation: {
        addEmployee: async (parent, args) => {
            console.log(args)

            let newEmp = new Employee({
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                gender: args.gender,
                city: args.city,
                designation: args.designation,
                salary: args.salary
            })

            return newEmp.save()
        },
        signUp: async (parent, args) => {
            console.log(args)

            let newUser = new User({
                username: args.username,
                email: args.email,
                password: args.password,
            })

            return newUser.save()
        },
        updateEmployee: async (parent, args) => {
            console.log(args)
            if (!args.id){
                return;
            }

            return await Employee.findOneAndUpdate(
            {
                _id: args.id
            },
            {
                $set: {
                    firstname: args.firstname,
                    lastname: args.lastname,
                    email: args.email,
                    gender: args.gender,
                    city: args.city,
                    designation: args.designation,
                    salary: args.salary
                }
            }, {new: true}, (err, employee) => {
                if (err) 
                {
                    console.log('Something went wrong when updating the employee');
                } else 
                {
                    return employee
                }
            }
        );
      },
      deleteEmployee: async (parent, args) => {
        console.log(args)
        if (!args.id){
            return JSON.stringify({status: false, "message" : "No ID found"});
        }
        return await Employee.findByIdAndDelete(args.id)
      }
    }
}