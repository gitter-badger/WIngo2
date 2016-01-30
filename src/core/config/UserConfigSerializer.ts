import * as fs from 'fs';
import { PathUtils } from '../util/PathUtils';
import { UserConfig } from '../interfaces/UserConfig';
import { Config } from '../../Config';

export class ConfigSerializer {

  /**
   * The absolute path to the config file
   */
  path: string = PathUtils.CONFIG_DIRECTORY;
  /**
   * The config which should be saved
   */
  userConfig: UserConfig;

  /**
   * Serializes the config containing the user's settings
   * @param config The config object which should be saved.
   */
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig;
  }

  /**
   * Writes the config into JSON storage files
   */
  saveData(): void {
    fs.writeFileSync(this.path + Config.configFileName, JSON.stringify(this.userConfig));
  }

  /**
   * Reads the config from JSON files and returns it
   */
  readData(): UserConfig {
    return JSON.parse(fs.readFileSync(this.path + Config.configFileName));
  }
}