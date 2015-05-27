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


   updateName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `student` set name = ? WHERE `idstudent`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

   updateMotherName: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `student` set  mother_name = ? WHERE `idstudent`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

   updateBirthDate : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `student` set birth_date = ? WHERE `idstudent`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },


   updatePlaceBirthe : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `student` set place_birth= ? WHERE `idstudent`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },


   updateBirthDate : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `student` set birth_date = ? WHERE `idstudent`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

   updateGender : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `student` set gender = ? WHERE `idstudent`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },


  DeleteStudent: function(id,cb){
     mysqlMgr.connect(function (conn) {
      conn.query('update `student` set status = 0 WHERE `idstudent`=?',[id,body.pk], function(err, result) {
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





  
  






         