import sql from 'mssql'

const dbSettings = {
    user : 'admin',
    password: '#Gama1076',
    server: 'database-1.cffzsiwgouqa.eu-north-1.rds.amazonaws.com',
    database: 'proyecto',
    options: {
        trustServerCertificate: true
    }
}

export async function getConnection () {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
       console.error(error) 
    }
}

export {sql}
