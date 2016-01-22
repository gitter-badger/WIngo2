import * as electron from 'electron';
import { Config } from '../Config';
import { menuTemplate } from './templates/MenuTemplate'

export class WIngo {

  app: GitHubElectron.App;
  window: GitHubElectron.BrowserWindow;
  menu: GitHubElectron.Menu;

  constructor() {
    this.app =  electron.app;
  }

  run(): void {
    this.app.on('ready', () => this.createWindow());
  }

  createWindow(): void {
    this.window = new electron.BrowserWindow({
      width: 800,
      height: 600
    });

    this.window.setTitle(Config.windowTitle);
    this.window.loadURL(Config.wwwEntryPath);

    this.initMenu();

    this.window.on('closed', () => {
      this.window = null;
    });
  }

  initMenu(): void {
    // Temporary Note: Use the initialized `Menu`, not the interface
    this.menu = electron.Menu.buildFromTemplate(menuTemplate);
    this.window.setMenu(this.menu);
  }
}
