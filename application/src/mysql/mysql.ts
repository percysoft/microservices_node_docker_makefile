import mysql = require('mysql');

export default class Mysql {
  private static _instance : Mysql;
  cnn: mysql.Connection;
  conectado: boolean = false;

  constructor() {
    console.log('Clase incializada');
    this.cnn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "node_db"
    });
    this.conectarDB();
  }
  public static get instance() {
    return this._instance || ( this._instance = new this());
  }

  static ejecutarQuery( query: string , callback:Function) {
      this.instance.cnn.query(query, ( err, results: Object[], fields)=> {
          if (err) {
              console.log(err, 'err en query');
              return callback(err);
          }

          if( results.length === 0){
              callback('El rgistro solicitado no existe')
          } else {
              callback(null,results);
          }
      })
  }

  private conectarDB() {
    this.cnn.connect((err:mysql.MysqlError)=> {
        if(err) {
            console.log(err.message);
            return;
        }
        this.conectado = true;
        console.log('BD online');
    });
  }
}