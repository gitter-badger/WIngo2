export class Pair<F, S> {

  first: F;
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