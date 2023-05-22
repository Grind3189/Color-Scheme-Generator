import {copyText, copyMessage} from './utils.js'
let colorHtml = ``
let textHtml = ``
let colors = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]

function render(){
    colors.forEach(function(color){
        colorHtml += `
            <div class="color-scheme"
            style="background-color:${color};"></div>
            `
        textHtml += `<p id="${color}">${color}</p>`
    })
    
   document.getElementById('color-schemes').innerHTML = colorHtml
   document.getElementById('hex').innerHTML = textHtml  
}
 
document.addEventListener('click', function(e){
    for (let i = 0; i < colors.length; i++){
        if (e.target.id === colors[i]){
           copyText(colors[i])
        }  
    }
    
    if (e.target.id === "btn-color"){
        getColorScheme()
    }
}) 

function getColorScheme(){
    colorHtml = ``
    textHtml = ``
    colors = []
    const selectedColor = document.getElementById('input-color').value.substring(1)
    const selectedScheme = document.getElementById('select-scheme').value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedScheme}&count=5`)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 5; i++){
            colors.push(data.colors[i].hex.value)
        }
        render()
    })
}

render()

