/* eslint-disable no-redeclare */

import { Book, LibMgrCallback } from './interfaces';
import { Category } from './enums';
import { Library, BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

export function getAllBooks(): readonly Book[] {
  const books: ReadonlyArray<Book> = <const>[
      {
           id: 1, 
           title: 'Refactoring JavaScript', 
           author: 'Evan Burchard', 
           available: true,
           category: Category.JavaScript
      },
      {
           id: 2, 
           title: 'JavaScript Testing', 
           author: 'Liang Yuxian Eugene', 
           available: false,
           category: Category.JavaScript
      },
      {
           id: 3, 
           title: 'CSS Secrets', 
           author: 'Lea Verou', 
           available: true,
           category: Category.CSS
      },
      {
           id: 4, 
           title: 'Mastering JavaScript Object-Oriented Programming', 
           author: 'Andrea Chiarelli', 
           available: true,
           category: Category.HTML
      }
  ]
  return books
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void{
  console.log(`Number of books:, ${books.length}`);
  // const title = books.find(book => book['available'] === true).title
  //const title = books.find((book: Book) => book['available'] === true).title
  const title = (books.find((book: { available: boolean}) => book.available === true) as Book | undefined)?.title
  console.log(`Fist avaliable book ${title}`);
  
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
  return getAllBooks()
          .filter(book => book.category === category)
          .map(book => book.title)
}

export function logBookTitles(titles: string[]): void {
  console.log(`Book titles: ${titles.join(', ')}`);
}

export function getBookAuthorByIndex(bookIndex: number): [title: string, author: string] {
  const { title, author } = getAllBooks()[bookIndex]
  return [title, author]
}


export function getAllLibraries() {
  const libraries: readonly Library[] = <const> [
      { 
          lib: 'libName1',
          books: 1_000_000_000, 
          avgPagesPerBook: 250 
      }, 
      { 
          lib: 'libName2', 
          books: 5_000_000_000, 
          avgPagesPerBook: 300 
      }, 
      { 
          lib: 'libName3', 
          books: 3_000_000_000, 
          avgPagesPerBook: 280
      }
  ]
  return libraries
}

export function getPages(library: Library): bigint {
  return BigInt(library.books * library.avgPagesPerBook)
}

export function calcTotalPages(libraries: readonly Library[]) {
  return libraries
  .map(library => getPages(library))
  .reduce((prev, current) => prev * current) 
}


export function createCustomerID(name: string, id: number): string {
  return `User name: ${name}, id: ${id}`
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  
  if (age) {
      console.log(`Customer age: ${age}`);
  }

  if (city) {
      console.log(`Customer city: ${city}`);
  }
}

export function getBookByID(id: number): BookOrUndefined{
  const books = getAllBooks()
  return books.find(book => book.id === id )
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer name: ${customer}`);
  return bookIDs
  .map(id => getBookByID(id))
  .filter(book => book.available === true)
  .map(book => book.title)
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id:number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks()
    if(args.length === 1) {
       const [arg] = args
       if( typeof arg === 'string') {
           return books.filter(book => book.author === arg).map(book => book.title)
       } else if( typeof arg === 'boolean') {
           return books.filter(book => book.available === arg).map(book => book.title)
       }
    } else if (args.length === 2) {
       const [id, available] = args
       if( typeof id === 'number' && typeof available === 'boolean') {
           return books.filter(book => book.id === id && book.available === available).map(book => book.title)
       }
    }
    return 
}

export function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string') {
      throw new Error('value should have been a string')
  }
}

export function assertRefBookInstance(condition: any): asserts condition {
  if(!condition) {
    throw new Error('It is not instance of RefBook')
  }
}

export function bookTitleTransform(title: any): string | never {
  assertStringValue(title)
  return title.split('').reverse().join('')
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] {
  if (typeof obj[prop] === 'function') {
      return obj[prop]['name'];
  }
  return obj[prop];
}

export function printRefBook(data: any): void {
  assertRefBookInstance(data instanceof RefBook);
  data.printItem();
}

export function purge<T>(inventary: T[]): T[] {
  return inventary.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
  setTimeout(() => {
      try {
          const titles = getBookTitlesByCategory(category);
          if (titles.length > 0) {
              callback(null, titles);
          } else {
              throw new Error('no books found');
          }
      } catch (e) {
          callback(e, null);
      }
  }, 2000);
}

export function logCategorySearch(err: Error | null, title: string[]): void {
  if (err) {
      console.log(err);
  } else {
      console.log(title);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => setTimeout(() => {
      const titles = getBookTitlesByCategory(category);
      if (titles.length > 0) {
          resolve(titles);
      } else {
          reject('no books found');
      }

  }, 2000));
}

export async function logSearchResults(category: Category) {
  const result = await getBooksByCategoryPromise(category);
}