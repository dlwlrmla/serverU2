import {getConnection, sql} from "../../db.js"
import querys from "../../querys.js"

export const getClients =async (req, res) => {
    try {
        const pool =  await getConnection()
        const result = await pool.request().query(querys.getAllClientes)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


export const createNewCliente = async(req,res) => {
    const {nombre, apellido, password, rut} = req.body
    if (nombre === null || rut === null || nombre.length === 0){
        return res.status(400).json({msg: "campos incompletos"})
    }
    try {
        const pool = await getConnection() 
        const result = await pool.request()
        .input('nombre', sql.VarChar, nombre)
        .input('apellido', sql.VarChar, apellido)
        .input('password', sql.VarChar, password)
        .input('rut', sql.VarChar, rut)
        .query(querys.insertClient)
        res.json({nombre, apellido, password, rut})
        console.log(result)       
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getClientById = async (req,res) => {
    const {id_cliente} = req.params

    const pool = await getConnection()

    const result = await pool.request()
    .input('id_cliente',id_cliente)
    .query(querys.getClienteById)
    res.json(result)
}

export const deleteClientById = async(req,res) => {
    const {id_cliente} = req.params
    const pool = await getConnection()
    const result = await pool.request()
    .input('id_cliente',id_cliente)
    .query(querys.deleteClientById)
    res.json(result)
}

export const register_Client = async(req, res) => {

    const {nombre, apellido, password, rut} = req.body
    if (nombre === null || rut === null || nombre.length === 0){
        return res.status(400).json({msg: "campos incompletos"})
    }
    const pool = await getConnection()

    const result = await pool.request()
    .input('nombre',sql.VarChar, nombre)
    .input('apellido',sql.VarChar, apellido)
    .input('password',sql.VarChar, password)
    .input('rut', sql.VarChar,rut)
    .query(querys.register_Client)
    res.json(result)
}

export const getCuentaById = async (req, res) => {
    const {id_cliente} = req.params

    const pool = await getConnection()
    console.log(id_cliente)
    const result = await pool.request()
    .input('id_cliente', id_cliente)
    .query(querys.cuentaById)
    res.json(result)
}

export const getCuentasDepositos = async(req, res) => {
    const {id_cliente} = req.params

    const pool = await getConnection()

    const result = await pool.request()
    .input('id_cliente', id_cliente)
    .query(querys.deposito)
    res.json(result)
}

export const depositar = async(req,res) => {
    let date = new Date()
    const{NumeroCuenta,TipoTransaccion, Monto,FechaHoraTransaccion ,NumeroCuentaEmisora,} = req.body
    
    console.log(NumeroCuenta,TipoTransaccion, Monto, date, NumeroCuentaEmisora,)

    const pool = await getConnection()

    const result = await pool.request()
    .input('NumeroCuenta', NumeroCuenta)
    .input('TipoTransaccion', TipoTransaccion)
    .input('Monto', Monto)
    .input('FechaHoraTransaccion', date)
    .input('NumeroCuentaEmisora', NumeroCuentaEmisora)
    .query(querys.depositacion)
    res.json(result)
}

