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

const btnCopy = document.querySelectorAll('.copy')
btnCopy.forEach(btn => {
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


