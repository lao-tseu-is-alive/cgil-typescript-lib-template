/**
 * iPoint is an interface to exchange data about a 2D cartesian (x,y) point with an otptional name
 */
export interface iPoint{
  x:number,
  y:number,
  name?:string,
}

/**
 * Point is a Class representing  a point in 2 dimension cartesian space
 */
export class Point {
  private p:iPoint = { x: 0, y: 0, name: '' };

  get x():number { return this.p.x; }

  set x(value:number) { this.p.x = value; }

  get y():number { return this.p.y; }

  set y(value:number) { this.p.y = value; }

  get name():(string|undefined) { return this.p.name; }

  set name(value:string|undefined) { this.p.name = value; }

  /**
   * Creates a point
   * @param {number} x coordinates in cartesian space or array with [x, y] numbers
   * @param {number} y coordinates in cartesian space, ignored if first argument is an array
   */
  constructor(x = 0, y = 0, name:(string|undefined) = undefined) {
    this.p = { x, y, name };
  }

  /**
   * give a string representation of this class instance
   */
  dump = ():string => `Point[${this.p.name}](${this.p.x}, ${this.p.y})`;

  getPoint = ():iPoint => ({
    x: this.p.x,
    y: this.p.y,
    name: this.p.name,
  });

  getDistanceFromOrigin = ():number => Math.sqrt(this.p.x * this.p.x + this.p.y * this.p.y);

  /**
   *  give the angle in Radian from horizontal axis x with the vector from origin to this point
   *  @returns{number} the angle in radian
   */
  getAngleRad = ():number => Math.atan(this.p.y / this.p.x);

  /**
   * give the angle in degree from horizontal axis x with the vector from origin to this point
   * @returns{number} the angle in degree
   */
  getAngleDeg = ():number => (Math.atan(this.p.y / this.p.x) * 360) / (2 * Math.PI);

  /**
   * will move this Point to the new position in cartesian space given by the new x and y values
   * @param x the new x coordinates in cartesian space of this Point
   * @param y the new y coordinates in cartesian space of this Point
   * @returns {Point} return this instance of the object (to allow function chaining)
   */
  move = (x:number, y:number):Point => { this.p.x = x; this.p.y = y; return this; };

  /**
   * move this Point relative to its position by the deltaX, deltaY displacement in cartesian space
   * @param dx the delta added to the current x coordinates in cartesian space of this Point
   * @param dy the delta added to the current y coordinates in cartesian space of this Point
   * @returns {Point} return this instance of the object (to allow function chaining)
   */
  moveRelative = (dx:number, dy:number):Point => { this.p.x += dx; this.p.y += dy; return this; };

  /**
   * give an array representation of this Point class instance [x, y]
   * @returns {Array} [x, y]
   */
  toArray():Array<number> {
    return [this.p.x, this.p.y];
  }
}
