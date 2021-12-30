import { Category } from './enums';
import { Author, Librarian, Logger, Book, Magazine  } from './interfaces';
import { purge, 
    printRefBook,
    getAllBooks,
    getBooksByCategory,
    getBooksByCategoryPromise,
    getProperty,
    logCategorySearch,
    logSearchResults
} from './functions';
import { RefBook, ReferenceItem, UL, Shelf } from './classes';
import { BookRequiredFields, N, PersonBook, UpdatedBook, СreateCustomerFunctionType } from './types';
import { Library } from './classes/library';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//==============================


let cat: Category = Category.JavaScript
console.log(cat);



//logBookTitles(getBookTitlesByCategory(Category.CSS))



//Task 02.01
// logFirstAvailable(getAllBooks())
// console.log(calcTotalPages(getAllLibraries()));
// console.log(getBookAuthorByIndex(2));


//Task 03.01

// const myID: string = createCustomerID('Anna', 10)
// console.log(myID);

// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `User name: ${name}, id: ${id}`
// idGenerator = createCustomerID
// console.log('Marina', 3);



 
// Task 03.02

// createCustomer('Anna')
// createCustomer('Marina', 25)
// createCustomer('Alex', 30, 'London')
// console.log(getBookTitlesByCategory());
// logFirstAvailable()
 // console.log(getBookByID(1));
 // console.log(checkoutBooks('Anna', 1, 2, 3, 4));



 // Task 03.03
// getTitles()



// Task 03.04

// console.log(bookTitleTransform("Type Script"));
// console.log(bookTitleTransform(123));



// const myBook = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3,
//     pages: 200,
//     markDamaged: (reason: string): void => {
//         console.log(`Damaged: ${reason}`);
        
//     }
// }

// Task 04.01
// printBook(myBook)
// myBook.markDamaged('missing back cover')

// Task 04.02

const logDamage: Logger = (reason: string): void => {
    console.log(`Damaged: ${reason}`);
}
logDamage('Missing back cover')

// Task 04.03 

const favoriteAuthor: Author = {
    name: "Anna",
    email: 'anna@example.com',
    numBooksPublished: 3
}

const favoriteLibrarian: Librarian = {
    name: "Anna",
    email: 'anna@example.com',
    department: 'Classical Literature',
    assistCustomer(name: string) {
        console.log(name);
    }
}

// Task 04.04 

const offer: any = {
    book: {
        title: 'Essensial TypeScript'
    }
}

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log((offer.book.authors?.[0]));


//Task 04.05

// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));




// Task 05.01

// const ref: ReferenceItem = new ReferenceItem(1, 'Learn TS', 2021)
// console.log(ref);
// ref.printItem()
// ref.publisher = 'abc'
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 06.03

//const refBook = new Encyclopedia(1, 'Learn TS', 2021, 3)
const refBook = new RefBook(1, 'Learn TS', 2021, 3)
console.log(refBook);
refBook.printItem();
printRefBook(refBook);

// const univ = new UL.UniversityLibrarian();
// printRefBook(univ);
// let p = Object.getPrototypeOf(refBook)
// p = Object.getPrototypeOf(p)
// console.log(p);
// p['printItem']()

// Task 05.03 

// const refBook = new Encyclopedia(1, 'Learn TS', 2021, 3)
// console.log(refBook);
// refBook.printCitation()

// Task 05.04

// const favorLibrarian: Librarian = new UL.UniversityLibrarian();
// favorLibrarian.name = 'Anna';
// favorLibrarian.assistCustomer('Marina');
// console.log(favorLibrarian);


// Task 05.05

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: "Anna",
//     email: 'example@a.com',
//     id: 1,
//     title: "JS",
//     available: false,
//     category: Category.TypeScript
// }

// console.log(personBook);


// Task 06.05

// const flag = true;

// if (flag) {
//     // const module = await import ('./classes');
//     // const reader = new module.Reader();

//     // reader.name = "Anna";
//     // console.log(reader);
    
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = "Anna";
//             console.log(reader);
//         })
//         .catch(err => console.log(err));
// }


// Task 06.06

// let lib: Library = new Library();

// Task 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
    ]; 
    
const result = purge(inventory);
// console.log(result);

// Task 07.02

const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
bookShelf.getFirst();

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));

// Task 07.03


magazineShelf.getFirst();
magazineShelf.printItem();
console.log(magazineShelf.find('Five points'));

const numberShelf: Shelf<N> = new Shelf<N>();

const res = getProperty(getAllBooks()[0], 'author');
console.log(res);

const bookRequiredFields: BookRequiredFields = {
    id: 123,
    title: ' title',
    markDamaged: () => null,
    pages: 12,
    available: true,
    author: 'a',
    category: Category.CSS
};

const updatedBook: UpdatedBook = {};
const params: Parameters<СreateCustomerFunctionType> = ['Anna'];

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function Format(prefix: string = 'Mr./Mrs.') {
    return function(target: any, propertyName: string) {
        makeProperty(target, propertyName, value => `${prefix} ${value}`, value => value);
    };
}
getBooksByCategory(Category.Software, logCategorySearch);
getBooksByCategory(Category.JavaScript, logCategorySearch);

getBooksByCategoryPromise(Category.JavaScript)
    .then(title => {
        console.log(title);
        return Promise.resolve(title.length);
    })
    .then(length => console.log(length))
    .catch(err => console.log(err));

logSearchResults(Category.JavaScript);