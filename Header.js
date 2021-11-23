const CreateHeaderdiv = function(Page){
   
    const Headerdiv = document.createElement('div')
    const HeaderText = document.createElement('h1')
    HeaderText.innerHTML = Page.Header
    Headerdiv.appendChild(HeaderText)
    Headerdiv.classList.add('HeaderdivSection')
  
    return Headerdiv
    
    
}

const CreateHeaderSection = function(div, ThisPage){
    div.append(CreateHeaderdiv(ThisPage))   
} 


export default {CreateHeaderSection}