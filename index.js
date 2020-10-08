const {
  BrowserWindow,
  app
} = require('electron')

app.on("ready", () => {
  let win = new BrowserWindow({
    backgroundColor: '#1a1a1a',
    frame: false,
    transparent: true
  })

  win.once('ready-to-show', () => {
    win.loadUrl("file://"+__dirname+"test.html")
  })
})



app.on('window-all-closed', () => {
  app.quit()
})