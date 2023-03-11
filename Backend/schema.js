const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    type Employee {
        id: ID!
        firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!
    }

    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        
    }

    type Query {
        getEmployees: [Employee]

        getEmployeeByID(id: ID!): Employee
        
        login(username: String!
                email: String!
                password: String!): User

        getEmployeeByGender(gender: String!): [Employee]
    }

    type Mutation {
        addEmployee(firstname: String!
            lastname: String!
            email: String!
            gender: String!
            city: String!
            designation: String!
            salary: Float!): Employee

        signUp(
            username: String!
            email: String!
            password: String!): User

        updateEmployee(id: String!
            firstname: String!
            lastname: String!
            email: String!
            gender: String!
            city: String!
            designation: String!
            salary: Float!): Employee
        
        deleteEmployee(id: String!): Employee
    }
`