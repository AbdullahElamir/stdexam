var mysqlMgr = require('./mysql').mysqlMgr,
exports.deptMgr = {

  addDepartment : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `department` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  getDepartment :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `department` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  getDepartmentById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `department` WHERE `status` <> 0 and iddepartment=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  getDepartmentByName :function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `department` WHERE `status` <> 0 and name=?',name,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


    updateName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `department` set name = ? WHERE `iddepartment`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },


   DeleteDepartment: function(id,cb){
       mysqlMgr.connect(function (conn) {
        conn.query('update `department` set status = 0 WHERE `iddepartment`=?',[id,body.pk], function(err, result) {
          conn.release();
          if(err) {
            util.log(err);
          } else {
            cb(result);
          }
        });
       });
  }





















  }





