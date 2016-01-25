import {Form} from '../Form';
import {Absence} from './Absence';

export class FormAbsence extends Absence {

  form: Form;

  /**
   * An Absence only for Forms if they're unavailable
   * @param form Timetable's form
   */
  constructor(form: Form) {
    super();
    this.form = form;
  }
}