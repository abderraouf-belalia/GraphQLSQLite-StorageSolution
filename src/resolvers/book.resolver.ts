import { Book } from "../models/book.model.ts";


class BookNotFound extends Error {}
class BookCreationFailed extends Error {}
class BookUpdateFailed extends Error {}
class BookDeleteFailed extends Error {}

export const resolvers = {
  Query: {
    async readBook(parent, args, contextValue, info) {
      let payload;
      try {
        const book = await Book.findByPk(args.id)
        if(book) {
          payload = {
            success: true,
            book: book
          } 
        } else {
          throw new BookNotFound(`Book with ${args} not found.`)
        } 
      }catch (error: unknown) {
        payload = {
          success: false,
          error: {name: (<Error>error).name, message: (<Error>error).message}
        }
      }

      return payload;
    },
  },

  Mutation: {
    async createBook(parent, args, contextValue, info) {
      let payload;
      try {
        const book = await Book.create(args)
        if(book) {
          payload = {
            success: true,
            book: book
          } 
        } else {
          throw new BookCreationFailed(`Failed to create book with ${args}.`)
        } 
      }catch (error: unknown) {
        payload = {
          success: false,
          error: {name: (<Error>error).name, message: (<Error>error).message}
        }
      }

      return payload;
    },
    async updateBook(parent, args, contextValue, info) {
      let payload;
      try {
        const book = await Book.findByPk(args.id)
        if(book) {
          book.set(args)
          await book.save()
          payload = {
            success: true,
            book: book
          } 
        } else {
          throw new BookUpdateFailed(`Failed to update book with ${args}.`)
        } 
      }catch (error: unknown) {
        payload = {
          success: false,
          error: {name: (<Error>error).name, message: (<Error>error).message}
        }
      }

      return payload;
    },

    async deleteBook(parent, args, contextValue, info) {
      let payload;
      try {
        const book = await Book.findByPk(args.id)
        if(book) {
          book.destroy()
          await book.save()
          payload = {
            success: true,
            book: book
          } 
        } else {
          throw new BookDeleteFailed(`Failed to update book with ${args}.`)
        } 
      }catch (error: unknown) {
        payload = {
          success: false,
          error: {name: (<Error>error).name, message: (<Error>error).message}
        }
      }

      return payload;
    }
  }
};
