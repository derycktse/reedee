import path from 'path'
import sqlite3 from 'sqlite3'

const client = sqlite3.verbose()

const db = new client.Database(path.resolve(__dirname, '../../databases/database.sqlite3'))

db.serialize(() => {
  // create default table
  db.run("CREATE TABLE if not exists token (token TEXT)");
  db.run(``)
})
db.close()


class DB {
  execCommand(cmds) {
    let commands = cmds
    if (!Array.isArray(commands)) {
      commands = [commands]
    }
    db.serialize(() => {
      commands.forEach(cmd => {
        db.run(cmd)
      })
    })
    db.close()
  }
  refreshToken() {
    let cmd = `
      upldate set where account = '' and type = ''
    `

  }


}

