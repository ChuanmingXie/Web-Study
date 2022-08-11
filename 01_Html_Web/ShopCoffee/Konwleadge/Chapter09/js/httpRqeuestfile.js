/*
    
 */

function load(filePath) {
    let xhr = new XMLHttpRequest();
    okstatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', filePath, false);
    xhr.overrideMimeType('text/html;charset=utf-8');
    xhr.send(null);
    return xhr.status === okstatus ? xhr.responseText : null;
}