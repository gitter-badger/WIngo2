export class PathUtils {
  
  /**
   * The path to the root dir of all needed settings files
   */
  static ROOT_DIRECTORY: string = (navigator.appVersion.indexOf("Win") != -1) ? process.env.APPDATA + '/WIngo' : './data/';
  /**
   * The path to the specific config.json file
   */
  static CONFIG_DIRECTORY: string = PathUtils.ROOT_DIRECTORY + 'config/';
}