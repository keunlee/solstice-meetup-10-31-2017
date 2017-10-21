var Hapi = require('hapi');

// (1) REST Server and Controller

var server = new Hapi.Server();
server.connection({ port: process.env.VCAP_APP_PORT || 3000 });

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('hello from nodejs').header('Content-Type', 'application/json')
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

// (2) Making our service Discoverable

// assuming no transpiler here
const Eureka = require('eureka-js-client').Eureka;

// example configuration
const client = new Eureka({
  // application instance information
  instance: {
    app: 'nodejsservice',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:3000/info',
    port: {
      '$': 3000,
      '@enabled': 'true',
    },
    vipAddress: 'nodejsservice',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    }
  },
  eureka: {
    // eureka server host / port
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/'
  }
});

client.logger.level('debug');
client.start(function(error){
  console.log(error || 'complete');
});
