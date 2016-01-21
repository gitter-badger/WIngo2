import * as electron from 'electron';

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
      },
      {
        label: 'Stundenplan',
        submenu: [
          {
            label: 'Neuer Stundenplan'
          },
          {
            label: 'Stundenpläne anzeigen'
          },
          {
            label: 'Datenverwaltung',
            submenu: [
              {
                label: 'Schuldaten anzeigen'
              },
              {
                type: 'separator'
              },
              {
                label: 'Neuer Lehrer'
              },
              {
                label: 'Neuer Klasse'
              },
              {
                label: 'Neue Jahrgangsstufe'
              },
              {
                label: 'Neues Fach'
              },
              {
                label: 'Neuer Raum'
              }
            ]
          }
        ]
      },
      {
        label: 'Vertretungsplan',
        submenu: [
          {
            label: 'Absenzen hinzufügen',
            submenu: [
              {
                label: 'Lehrer'
              },
              {
                label: 'Klasse'
              },
              {
                label: 'Raum'
              }
            ]
          },
          {
            type: 'separator'
          },
          {
            label: 'Heutige Vertretungen'
          },
          {
            label: 'Vertretungsplan anzeigen'
          },
          {
            label: 'Drucken'
          }
        ]
      },
      {
        label: 'Export',
        submenu: [
          {
            label: 'Wingo Mobile Application'
          },
          {
            label: 'HTML Script'
          },
          {
            label: 'CSV-Datei'
          },
          {
            label: 'Datenbank',
            submenu: [
              {
                label: 'MySQL'
              },
              {
                label: 'MongoDB'
              }
            ]
          }
        ]
      },
      {
        label: 'Hilfe',
        submenu: [
          {
            label: 'Impressum'
          },
          {
            label: 'Website',
            click: () => { electron.shell.openExternal('http://www.wingo-software.de')}
          }
        ]
      }
    ];

    // Temporary Note: Use the initialized `Menu`, not the interface
    this.menu = electron.Menu.buildFromTemplate(template);
    this.window.setMenu(this.menu);
  }
}