const say = function (name) {

    var div = document.createElement('div');
    div.style = 'background-color:lightblue';
    div.innerHTML =  'Hello' + name;
    document.body.appendChild(div);
    alert ('Hello, ' + name );
}
export default say;
