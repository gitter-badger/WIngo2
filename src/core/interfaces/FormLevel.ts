﻿export class FormLevel {

  level: number;
  //TODO(lordnoname): add subject and weekly amount of this subject in a array

  constructor(level: number) {
    this.level = level;
  }

  toString(): string {
    return this.level + '';
  }
}