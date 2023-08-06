const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('saveDialog', () => ipcRenderer.invoke('save-dialog'))
