import * as electron from 'electron';
import App = GitHubElectron.App;
import BrowserWindow = GitHubElectron.BrowserWindow;

export class WIngo {

  app: App;
  window: BrowserWindow;
  menu: Menu;

  constructor() {
    this.app = electron.app;
    this.menu = app.Menu;
  }

  run(): void {
    this.app.on('ready', function() {
      this.createWindow;
      this.createMenu;
    });
  }

  createWindow(): void {
    this.window = new electron.BrowserWindow({width: 800, height: 600});
    this.window.loadURL('file://' + __dirname + '/www/index.html');

    this.window.on('closed', () => {
      this.window = null;
    });
  }

  createMenu(): void {
    var template = [
      {
        label: 'Datei',
        submenu: [
          {
            label: 'Beenden',
            accelerator: 'Alt+F4',
            role: 'close'
          },
          {
            label: 'Speichern',
            accelerator: 'CmdOrCtrl+S'
          },
          {
            label: 'Drucken'
          },
          {
            label: 'Import'
          }
        ]
      }
    ];
    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
}