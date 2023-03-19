import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        hello: String
        projects: [Project]
        tasks: [Task]
        users: [User]
    }

    type Mutation {
        createProject(name: String, description: String): Project
        createTask(title: String, projectId: ID): Task
        createUser(name: String, email: String): User
    }

    type Project {
        _id: ID,
        name: String,
        description: String,
        createdAt: String,
        updatedAt: String
    }

    type Task {
        _id: ID,
        title: String,
        projectId: ID,
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