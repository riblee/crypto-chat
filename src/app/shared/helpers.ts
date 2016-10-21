/**
 * Extend this class to use fromJSON method.
 */
export abstract class Serializable {
  fromJSON<T>(obj: any) {
    for (var propName in obj) {
      this[propName] = obj[propName];
    }
  }
}

/**
 * A helper class for building instances from JSON objects.
 */
export abstract class InstanceBuilder {
  /**
   * Re-assign properties from a JSON object to an existing instance.
   * @param obj - The target instance
   * @param jsonObj - The source object
   * @returns {T} - The instance
   * @example InstanceBuilder.toInstance(new User(), { name: 'John Doe' });
   */
  static fromJSON<T>(obj: T, jsonObj: any): T {
    for (var propName in jsonObj) {
      obj[propName] = jsonObj[propName];
    }

    return obj;
  }

  /**
   * Build a new instance from a JSON object.
   * @param obj - The source
   * @param c - Class
   * @returns {T} - A new instance from <T>
   * @example InstanceBuilder.build(User, { name: 'John Doe' });
   */
  static build<T>(c: {new(): T; }, obj: any): T {
    let instance = new c();
    return InstanceBuilder.fromJSON(instance, obj);
  }

  /**
   * Build an array of new instances from an array of JSON object.
   * @param arr - The source array
   * @param c - Class
   * @returns {T} - A new array of instances from <T>
   * @example InstanceBuilder.buildArray(User, [{ name: 'John Doe' }]);
   */
  static buildArray<T>(c: {new(): T; }, arr: any[]): T[] {
    let instances = [];

    for (let i = 0; i < arr.length; i++) {
      let instance = new c();
      InstanceBuilder.fromJSON(instance, arr[i]);

      instances.push(instance);
    }
    return instances;
  }

}
