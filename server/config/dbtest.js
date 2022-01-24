const oracleDB = require('oracledb');
const { user, password, conn } = require('./dbConfig');

const config = {
    user,
    password,
    conn
}

oracleDB.getConnection(config, (err, conn) => {
    todoWork(err, conn);
});

function todoWork(err, connection) {
    if (err) {
        console.error(err.message);
        return;
    }
    connection.execute("select * from admin", [], function (err, result) {
        if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
        }
        console.log(result.metaData);
        console.log(result.rows);
        doRelease(connection);
    });
}

function doRelease(connection) {
    connection.release(function (err) {
        if (err) {
            console.error(err.message);
        }
    });
}
