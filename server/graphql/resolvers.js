import Project from "../models/Project.js";
import Task from "../models/Task.js";
import User from "../models/User.js";

export const resolvers = {
    Query: {
        hello: () => "Hello",
        projects: async () => {
            return await Project.find()
        },
        tasks: async () => {
            return await Task.find()
        },
        users: async () => {
            return await User.find()
        }
    },
    Mutation: {
        createProject: async (_, {name, description}) => {
            const project = new Project({
                name,
                description
            });
            const savedProject = await project.save();
            return savedProject;
        },
        createTask: async (_, {title, projectId}) => {
            const project = await Project.findById(projectId);
            if(!project) throw new Error("Project not found");

            const task = new Task({
                title,
                projectId
            });
            const savedTask = await task.save();
            return savedTask;
        },
        createUser: async (_, {name, email}) => {
            const user = new User({
                name,
                email
            });
            const savedUser = await user.save();
            return savedUser;
        }
    }
}