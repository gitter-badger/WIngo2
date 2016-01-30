import { PathUtils } from '../util/PathUtils';

export class UserConfig {

  currentSchoolName: string;
  schoolDataPath: string;

  constructor(currentSchoolName?: string, schoolDataPath?: string) {
    this.currentSchoolName = currentSchoolName || 'default';
    this.currentSchoolName = schoolDataPath || PathUtils.ROOT_DIRECTORY + this.currentSchoolName + '/schooldata/';
  }
}