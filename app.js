const nodejs = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("textAreaNodeJS");
    code.textContent = text
}
nodejs('code/nodejs.js');

const nodejsEnv = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("nodejs-env");
    code.textContent = text
}
nodejsEnv('code/nodejs-env.txt');

const nodejsRun = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("nodejs-run");
    code.textContent = text
}
nodejsRun('code/nodejs-run.txt');

const python = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("textAreaPython");
    code.textContent = text
}
python('code/python.py');

const pythonEnv = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("python-env");
    code.textContent = text
}
pythonEnv('code/python-env.txt');

const pythonRun = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("python-run");
    code.textContent = text
}
pythonRun('code/python-run.txt');

const golang = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("textAreaGolang");
    code.textContent = text
}
golang('code/golang.go');

const golangEnv = async file => {
    const response = await fetch(file);
    const text = await response.text();
    //console.log(text);
    var code = document.getElementById("golang-env");
    code.textContent = text
}
golangEnv('code/golang-env.txt');

const golangRun = async file => {
    const response = await fetch(file);
    const text = await response.text();
    var code = document.getElementById("golang-run");
    code.textContent = text
}
golangRun('code/golang-run.txt');

const golangGetPeople = async file => {
    const response = await fetch(file);
    const text = await response.text();
    var code = document.getElementById("golang-get-people");
    code.textContent = text
}
golangGetPeople('code/golang-get-people.txt');

const golangGetPerson = async file => {
    const response = await fetch(file);
    const text = await response.text();
    var code = document.getElementById("golang-get-person");
    code.textContent = text
}
golangGetPerson('code/golang-get-person.txt');

const golangPost = async file => {
    const response = await fetch(file);
    const text = await response.text();
    var code = document.getElementById("golang-post");
    code.textContent = text
}
golangPost('code/golang-post.txt');

const golangPut = async file => {
    const response = await fetch(file);
    const text = await response.text();
    var code = document.getElementById("golang-put");
    code.textContent = text
}
golangPut('code/golang-put.txt');

const golangDelete = async file => {
    const response = await fetch(file);
    const text = await response.text();
    var code = document.getElementById("golang-delete");
    code.textContent = text
}
golangDelete('code/golang-delete.txt');

const btnCopyNodeJS = document.querySelectorAll('.copyNodeJS')
btnCopyNodeJS.forEach(btn => {
    btn.addEventListener('click', () => {
        var code = document.getElementById("textAreaNodeJS");
        var input = document.createElement('textarea');
        input.innerHTML = code.textContent;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
    })
})

const btnCopyPython = document.querySelectorAll('.copyPython')
btnCopyPython.forEach(btn => {
    btn.addEventListener('click', () => {
        var code = document.getElementById("textAreaPython");
        var input = document.createElement('textarea');
        input.innerHTML = code.textContent;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
    })
})

const btnCopyGolang = document.querySelectorAll('.copyGolang')
btnCopyGolang.forEach(btn => {
    btn.addEventListener('click', () => {
        var code = document.getElementById("textAreaGolang");
        var input = document.createElement('textarea');
        input.innerHTML = code.textContent;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
    })
})