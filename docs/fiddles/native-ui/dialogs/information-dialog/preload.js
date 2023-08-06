const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('openInformationDialog', () => ipcRenderer.invoke('open-information-dialog'))
