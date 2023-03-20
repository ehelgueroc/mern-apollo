import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        hello: String
        projects: [Project]
        project(_id: ID!): Project
        tasks: [Task]
        task(_id: ID!): Task
        users: [User]
    }

    type Mutation {
        createProject(name: String, description: String): Project
        updateProject(_id: ID!, name: String!, description: String): Project
        deleteProject(_id: ID!): Project
        createTask(title: String, projectId: ID): Task
        updateTask(_id: ID!, title: String!, projectId: ID!): Task
        deleteTask(_id: ID!): Task
        createUser(name: String, email: String): User
        updateUser(_id: ID!, name: String!, email: String): User
        deleteUser(_id: ID!): User
    }

    type Project {
        _id: ID,
        name: String,
        description: String,
        createdAt: String,
        updatedAt: String,
        tasks: [Task]
    }

    type Task {
        _id: ID,
        title: String,
        project: Project,
        createdAt: String,
        updatedAt: String
    }

    type User {
        _id: ID,
        name: String,
        email: String,
        createdAt: String,
        updatedAt: String
    }
`;