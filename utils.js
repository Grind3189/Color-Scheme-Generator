function copyText(color){
  let textarea = document.createElement("textarea");
  textarea.value = color;
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  copyMessage()
}
function copyMessage(){
    document.getElementById('pop-up-message').style.display = 'block'
    setTimeout(function(){ 
        document.getElementById('pop-up-message').style.display = 'none'
    },1000)
}

export {copyText,copyMessage}