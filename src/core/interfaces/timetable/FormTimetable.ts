import {Form} from '../Form';
import {Timetable} from './Timetable';

export class FormTimetable extends Timetable {
  
  /**
   * Form of the Timetable
   */
  form: Form;

  /**
   * A Timetable only for Forms
   * @param form Timetable's form
   */
  constructor(form: Form) {
    super();
    this.form = form;
  }
}