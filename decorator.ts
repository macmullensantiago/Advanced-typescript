// export function sealed(target: Function): void {
//   console.log('Sealing the constructor');
//   Object.seal(target);
//   Object.seal(target.prototype);
// }

export function sealed(name: string) {
  return function sealed(target: Function): void {
    console.log(`Sealing the constructor ${name}`);
    console.log(target.prototype);
    Object.seal(target);
    Object.seal(target.prototype);
  }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  let newConstructor: Function = function () {
    console.log('creating new instance');
    console.log(target);
  }

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;
  return <TFunction>newConstructor;
}

export function readOnly(target: Object,
  propertykey: string,
  descriptor: PropertyDescriptor) {
  console.log(`Setting ${propertykey} to be read-only`);
  descriptor.writable = false;
}