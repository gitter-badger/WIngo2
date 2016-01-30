import * as fs from 'fs';
import { SchoolData } from '../objects/SchoolData';

export class SchoolDataSerializer {

  path: string;
  schoolData: SchoolData;

  /**
   * Serializes the school data
   * @param path Path to the schooldata directory
   * @param schoolData The schooldata object where the data should be saved to/loaded from.
   */
  constructor(path: string, schoolData: SchoolData) {
    this.path = path;
    this.schoolData = schoolData;
  }

  /**
   * Writes the stored school data into JSON storage files
   */
  saveData(): void {
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.formLevels));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.forms));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.teachers));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.rooms));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.subjects));
  }

  /**
   * Reads the school data from JSON files and stores them
   */
  readData(): void {
    for (var form in JSON.parse(fs.readFileSync(this.path + 'forms.json').toString())) {
      this.schoolData.addForm(form);
    }

    for (var formLevel in JSON.parse(fs.readFileSync(this.path + 'formLevels.json').toString())) {
      this.schoolData.addFormLevel(formLevel);
    }

    for (var room in JSON.parse(fs.readFileSync(this.path + 'rooms.json').toString())) {
      this.schoolData.addRoom(room);
    }

    for (var subject in JSON.parse(fs.readFileSync(this.path + 'subjects.json').toString())) {
      this.schoolData.addSubject(subject);
    }

    for (var teacher in JSON.parse(fs.readFileSync(this.path + 'teachers.json').toString())) {
      this.schoolData.addTeacher(teacher);
    }
  }
}