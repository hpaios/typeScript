import { Author, Book, Person } from './interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';

// type Book = {
//     id: number,
//     title: string,
//     author: string,
//     available: boolean,
//     category: Category
// }

export type Library = {
  lib: string;
  books: number;
  avgPagesPerBook: number;
}

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type N = { title: string; a: number};

export type BookRequiredFields = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type СreateCustomerFunctionType = typeof createCustomer;

export type fn = (a: string, b: number, c: boolean) => symbol;

export type param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;

export type param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;

export type param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

type P1 = param1<fn>;

type P2 = param2<fn>;

type P3 = param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R>? R : never;
type rt = ReturnType<typeof getBooksByCategoryPromise>;
type s = Unpromisify<rt>;


// type DamageLogger = (reason: string) => void
