  var mysqlMgr = require('./mysql').mysqlMgr,
  exports.stdMgr = {

  addStudent : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `student` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },



}

  getStudent :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `student` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getStudentById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `student` WHERE `status` <> 0 and idstudent=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  getStudentByName :function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `student` WHERE `status` <> 0 and name=?',name,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  






         