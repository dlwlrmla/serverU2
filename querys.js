export default {
    getAllClientes: 'select * from clientes',
    insertClient: 'insert into clientes (nombre, apellido, password, rut) values (@nombre, @apellido, @password, @rut)',
    getClienteById: 'select * from clientes where id_cliente = @id_cliente',
    deleteClientById: 'delete from clientes where id_cliente = @id_cliente',
    register_Client:'exec register_Client @nombre, @apellido, @password, @rut',
    cuentaById: 'select * from cuentasBancarias where id_cliente = @id_cliente',
    deposito: 'select * from cuentasBancarias where id_cliente !=@id_cliente ',
    depositacion: 'INSERT INTO transacciones (NumeroCuenta, TipoTransaccion, Monto, FechaHoraTransaccion, NumeroCuentaEmisora) VALUES (@NumeroCuenta, @TipoTransaccion, @Monto, @FechaHoraTransaccion, @NumeroCuentaEmisora)'

}