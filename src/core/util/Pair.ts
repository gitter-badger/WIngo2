export class Pair<F, S> {

  /**
   * First item of the pair
   */
  first: F;
  /**
   * Second item of the pair
   */
  second: S;

  /**
   * A class which allows you to store two items separately
   * @param first First item
   * @param second Second item
   */
  constructor(first: F, second: S) {
    this.first = first;
    this.second = second;
  }
}