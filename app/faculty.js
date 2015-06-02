  var mysqlMgr = require('./mysql').mysqlMgr,
  exports.facultyMgr = {


  addFaculty: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `faculty` SET ?',body,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


   getFaculty :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `faculty` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  getFacultyById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `faculty` WHERE `status` <> 0 AND idfaculty_member=?',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


   getFacultyById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `faculty` WHERE `status` <> 0 AND idfaculty_member=?',id,function(err, result) {
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