import fs = require('fs');
import { SchoolData } from '../objects/SchoolData';

export class SchoolDataDeserializer {

  path: string;
  schoolData: SchoolData;

  /**
   * Reads the schooldata from .json files and deserializes them to objects
   * @param path Path to the schooldata directory
   * @param schoolData The schooldata object in which the data should be saved.
   */
  constructor(path: string, schoolData: SchoolData) {
    this.path = path;
    this.schoolData = schoolData;

    this.readData();
  }

  private readData(): void {
    for (var form in JSON.parse(fs.readFileSync(this.path + 'forms.json'))) {
      this.schoolData.addForm(form);
    }
    for (var formLevel in JSON.parse(fs.readFileSync(this.path + 'formLevels.json'))) {
      this.schoolData.addFormLevel(formLevel);
    }
    for (var room in JSON.parse(fs.readFileSync(this.path + 'rooms.json'))) {
      this.schoolData.addRoom(room);
    }
    for (var subject in JSON.parse(fs.readFileSync(this.path + 'subjects.json'))) {
      this.schoolData.addSubject(subject);
    }
    for (var teacher in JSON.parse(fs.readFileSync(this.path + 'teachers.json'))) {
      this.schoolData.addTeacher(teacher);
    }
  }
}