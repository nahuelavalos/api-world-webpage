//API-REST
var express = require('express');
var app = express();

//Repository
var people = [
    {"id":"1", "nombre":"Juan", "apellido":"Perez"},
    {"id":"2", "nombre":"Ana", "apellido":"Lia"},
    {"id":"3", "nombre":"Carlos", "apellido":"García"}
];

//GET (People)
app.get('/people', function(req, res){
    res.send(people);
});

//POST (Person)
app.post('/people', function(req, res){
    var id = req.body.id;
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;

    people.push({"id": id, "nombre": nombre, "apellido": apellido});

    res.send(people);
});

//PUT (Person)
app.put('/people/:personId', function(req, res){
    var personId = req.params.personId;
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;

    for(var x in people){
        var person = people[x];

        if(person.id === personId){
            person.nombre = nombre;
            person.apellido = apellido;
            break;
        }
    }

    res.send(people);
});

//DELETE (Person)
app.delete('/people/:personId', function(req, res){
    var personId = req.params.personId;

    for(var x in people){
        var person = people[x];

        if(person.id === personId){
            people.splice(x, 1);
            break;
        }
    }

    res.send(people);
});

//GET (Person)
app.get('/people/:personId', function(req, res){
    var personId = req.params.personId;
    var response = {"id":"0", "nombre":"Persona", "apellido":"Inexistente"};
    
    for(var x in people){
        var person = people[x];

        if(person.id === personId){
            response = person;
            break;
        }
    }
    
    res.send(response);
});

//Port
var port = 8080;
app.listen(port);
console.log("Escuchando en el puerto " + port);