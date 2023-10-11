const { User, Book } = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    books: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Book.find(params);
    },
  },
  Mutation: {
    saveBook: async (parent, { body }, context) => {
        const { [], description, title }
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: body } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
    },
    deleteBook: async (parent, { params.bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: { bookId: params.bookId } } },
          { new: true }
        );
        return updatedUser;
      } 
    },
  },
};

module.exports = resolvers;
