const { Mongoose, default: mongoose } = require("mongoose");
const Employee = require("./model/DbEmployee");

const resolvers = {
  Query: {
    getEmployees: async () => {
      return await Employee.find({});
    },
    getSingleEmployee: async (_, id) => {
      return await Employee.findById(mongoose.Types.ObjectId(id));
    },
  },
  Mutation: {
    postEmployee: async (_, args) => {
      const user = await Employee.create(args);
      return user;
    },
    deleteEmployee: async (_, args) => {
      return await Employee.findByIdAndDelete(mongoose.Types.ObjectId(args.id));
    },
    updateEmployee: async (_, args) => {
      const user = await Employee.findByIdAndUpdate(
        mongoose.Types.ObjectId(args.id),
        {
          CurrentStatus: args.CurrentStatus,
          department: args.department,
          title: args.title,
        },
        { new: true }
      );

      return user;
    },
  },
};

module.exports = resolvers;
``;
