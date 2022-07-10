window.onload=boundEvent;

function boundEvent() {
    var inputs=document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if('button' == inputs[i].type){
            inputs[i].onclick=function(e){
                alert(e.target.value);
            }
        }
    }
}

function resetForm(){
    alert('表单进行重置');
    document.getElementById('userName').value="";
    document.getElementById('userType').value="";
    return false;
}
function checkForm(){
    var userName=document.getElementById('userName').value;
    var userType=document.getElementById('userType').value;
    if(userName=='admin'&&userType=='管理员'){
        alert('表单将进行提交');
        return true;
    }
    alert('表单不进行提交');
    return false;
}

function userNameOnFocus(){
    var userName=document.getElementById('userName');
    if(userName.value=='请输入用户名'){
        userName.value="";
    }
    userName.style.backgroundColor='#F1F0ED';
}

function userNameOnBlur(){
    var userName=document.getElementById('userName');
    if(userName.value==''){
        userName.value='请输入用户名';
    }
}

function showKeyPress(e){
    var showDiv=document.getElementById('showDiv');
    e=e||window.event;
    var char=e.keyCode?e.keyCode:e.which;
    showDiv.innerHTML=showDiv.innerHTML+String.fromCharCode(char);
}

function userTypeSelect(){
    var userType=document.getElementById('userType');
    alert(userType.value);
}