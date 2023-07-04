import {Router } from "express"
import { getClients, createNewCliente, getClientById,
     deleteClientById, register_Client, getCuentaById,
      getCuentasDepositos,depositar } from "../controllers/clientes.controller.js"


const router = Router()

router
.get('/clientes', getClients)
.post('/clientes', createNewCliente)
.get('/clientes/:id_cliente', getClientById)
.delete('/clientes/:id_cliente',deleteClientById )
.post('/clientes/register', register_Client)
.get('/cuenta/:id_cliente', getCuentaById)
.get('/cuentasDeposito/:id_cliente', getCuentasDepositos)
.post('/depositar', depositar)
export default router

