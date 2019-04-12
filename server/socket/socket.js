const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {

        console.log('Usario desconectado');
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     })
        // } else {
        //     callback({
        //         resp: 'Todo salio MAL'
        //     })
        // }
    })
})