import Project from "../models/Project.js";
import Task from "../models/Task.js";
import User from "../models/User.js";

export const resolvers = {
    Query: {
        hello: () => "Hello",
        projects: async () => await Project.find(),
        tasks: async () => await Task.find(),
        users: async () => await User.find(),
        project: async (_, { _id }) => await Project.findById(_id),
        task: async (_, {_id}) => await Task.findById(_id)
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
        },
        deleteProject: async (_, {_id}) => {
            const deletedProject = await Project.findByIdAndDelete(_id);
            if(!deletedProject) throw new Error("Project was not found");
            return deletedProject;
        },
        deleteTask: async (_, {_id}) => {
            const deletedTask = await Task.findByIdAndDelete(_id);
            if(!deletedTask) throw new Error("Task was not found");
            return deletedTask;
        }
    }
}