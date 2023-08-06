const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('dragStart', () => ipcRenderer.send('ondragstart'))
