/* eslint-disable no-underscore-dangle */

import { Librarian } from '../interfaces';
import { logger, logMethod, logParameter, sealed, writable } from '../decorators';
import { Format } from '../app';

// @sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements Librarian {
    @Format() name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }
    @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}
