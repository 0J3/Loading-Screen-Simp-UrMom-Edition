const {
  BrowserWindow,
  app
} = require('electron')

app.on("ready", () => {
  let win = new BrowserWindow({
    backgroundColor: '#2e2c29',
    show: false,
    
  })

  win.once('ready-to-show', () => {
    win.loadURL('https://github.com')
  })
})



app.on('window-all-closed', () => {
  app.quit()
})