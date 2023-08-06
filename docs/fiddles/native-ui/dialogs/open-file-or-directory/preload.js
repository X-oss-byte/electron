const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('openFileDialog', () => ipcRenderer.invoke('open-file-dialog'))
