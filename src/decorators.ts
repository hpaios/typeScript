export function sealed(p: string) {
  return function(target: Function): void {
      console.log(`Sealing in constrictor ${p}`);

      Object.seal(target);
      Object.seal(target.prototype);
  };
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
      console.log('Logger decorator');
      console.log(target);

      this.age = 30;

  };
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.printLibrarian = function() {
      console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  };
  return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
  return function(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
      console.log(`decorator writable, isWritable = ${isWritable}`);

      descriptor.writable = isWritable;
      return descriptor;
  };
}

export function timeout(ms: number) {
  return function(target: any, methodName: string, description: PropertyDescriptor): PropertyDescriptor {
      console.log(`Decorator Method param value: ${ms}`);

      const originalMethod = description.value;

      description.value = function(...args: any[]) {
          if( window.confirm('are you sure?')) {
              setTimeout(() => {
                  originalMethod.apply(this, args);
              }, ms);
          }
      };
      return description;
  };
}

export function logParameter(target: any, methodName: string, index: number): void {
  const key = `${methodName}_decor_params_indexes`;

  if(Array.isArray(target[key])) {
      target[key].push(index);
  } else {
      target[key] = [index];
  }
}

export function logMethod(target: any, methodName: string, description: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = description.value;


  description.value = function(...args: any[]) {
      const key = `${methodName}_decor_params_indexes`;
      const indexes = target[key];
      if(Array.isArray(target[key])) {
          args.forEach((arg, index) => {
              if( indexes.include(index)) {
                  console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
              }
          });
      }
      originalMethod.apply(this, args);
  };
  return description;
}

export function positiveInteger(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalSet = descriptor.set;

  descriptor.set = function(value: number) {
      if(value < 1 || !Number.isInteger(value)){
          throw new Error('not a number');
      }
  };
  return descriptor;
}
