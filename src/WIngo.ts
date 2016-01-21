import * as electron from 'electron';

export class WIngo {

  app: GitHubElectron.App;
  window: GitHubElectron.BrowserWindow;
  menu: GitHubElectron.Menu;

  constructor() {
    this.app =  electron.app;
  }

  run(): void {
    this.app.on('ready', this.createWindow);
  }

  createWindow(): void {
    this.window = new electron.BrowserWindow({width: 800, height: 600});
    this.window.loadURL('file://' + __dirname + '/www/index.html');

    this.initMenu();

    this.window.on('closed', () => {
      this.window = null;
    });
  }

  initMenu(): void {
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

    // Temporary Note: Use the initialized `Menu`, not the interface
    this.menu = electron.Menu.buildFromTemplate(template);
    this.window.setMenu(this.menu);
  }
}