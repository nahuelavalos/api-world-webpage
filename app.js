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
