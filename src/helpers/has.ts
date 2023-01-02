type HasOwnPropertyCall = typeof Object.prototype.hasOwnProperty.call

export function has(obj: Parameters<HasOwnPropertyCall>[0], key: Parameters<HasOwnPropertyCall>[1]): boolean {
   return Object.prototype.hasOwnProperty.call(obj, key)
}