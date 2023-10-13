const { User } = require("../models");
const { signToken } = require('../utils/auth');


// input BookInput {
//   authors: [String]
//   description: String
//   title: String
//   bookId: ID
//   image: String
//   link: String
// }

const resolvers = {
  Query: {
    me: async ({ parent, args, context }) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id });
        res.json(foundUser);
      }
    }
  },
  Mutation: {
    login: async (parent, { email, password  }) => {
      const user = await User.findOne({ email });
      const correctPw = await user.isCorrectPassword({ password });
      const token = signToken(user);
      res.json({ token, user });
    },
    addUser: async ( parent, { body }) => {
      const user = await User.create(body);
      const token = signToken(user);
    res.json({ token, user });
    },
    saveBook: async (parent, { bookInput }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { input: bookInput } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      } 
    },
  },
};

module.exports = resolvers;
