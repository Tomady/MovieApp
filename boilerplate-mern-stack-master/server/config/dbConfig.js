module.exports = {
    user: process.env.NODEORACLEDB_USER || "prj",
    password: process.env.NODEORACLEDB_PASSWORD || "1234",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "local/xe"
}
