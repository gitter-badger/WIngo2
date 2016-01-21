import * as electron from 'electron';
import App = GitHubElectron.App;
import BrowserWindow = GitHubElectron.BrowserWindow;

export class WIngo {

  app: App;
  window: BrowserWindow;

  constructor() {
    this.app = electron.app;
  }

  run(): void {
    this.app.on('ready', this.createWindow);
  }

  createWindow(): void {
    this.window = new electron.BrowserWindow({width: 800, height: 600});
    this.window.loadURL('file://' + __dirname + '/www/index.html');

    this.window.on('closed', () => {
      this.window = null;
    });
  }

}