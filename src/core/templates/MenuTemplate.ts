import * as electron from 'electron';
import MenuItem = GitHubElectron.MenuItem;
import BrowserWindow = GitHubElectron.BrowserWindow;
import WebContents = GitHubElectron.WebContents;

let menuTemplate = [
  {
    label: 'Datei',
    submenu: [
      {
        label: 'Beenden',
        accelerator: 'CmdOrCtrl+Q',
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
        click: () => electron.shell.openExternal('http://www.wingo-software.de')
      },
      {
        label: 'Entwickler-Tools',
        accelerator: 'F12',
        click: (item: MenuItem, contents: WebContents) => contents && contents.toggleDevTools()
      }
    ]
  }
];

export { menuTemplate };
