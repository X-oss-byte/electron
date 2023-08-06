const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('openErrorDialog', () => ipcRenderer.send('open-error-dialog'))
