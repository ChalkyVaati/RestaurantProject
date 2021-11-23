import BobaMenuItems from './Menupage.js'
import Homepageload from './Homepage.js'
import Contactpageload from './Contactpage.js'
import ListItems from './Content.js'
const HomepagePage = Homepageload.HomepageSection
const MenuPage = BobaMenuItems.Menupageload
const ContactPage = Contactpageload.ContactSection
const ListofPages = ListItems.TabContentPages

console.log(HomepagePage)
console.log(MenuPage)
console.log(ContactPage)

const Container = document.querySelector('.container')
const TabContainer = document.querySelector('.TabContainer')
const TabContent = document.createElement('div')
TabContent.className = 'tab-content'
HomepagePage.classList.add('active')
TabContent.append(HomepagePage, MenuPage, ContactPage)
Container.append(TabContent)
const TabGroup = document.createElement('div')
TabGroup.className = 'Tab_group'
//Tab/Content

const imagediv = document.createElement('div')
var img = document.createElement('img')
img.src ='Img/Bigtimeboba.jpg'

img.style.height ='64px'

imagediv.appendChild(img)
imagediv.classList.add('positioning')
TabContainer.appendChild(imagediv)




//Add Eventlisteners
const EventlisterTabs = function(div){
    const TabHover = function(){
        this.classList.add('hover')
    }
    const TabUnHover = function(){
        this.classList.remove('hover')
    }
    //Remove All active tabs
    const Tabfunctionality = function(group){    
        
        const Subtab = TabContent.children
        const subDiv = group.children
        console.log(Subtab) //The page
        console.log(subDiv) //The tab
        
        for(var i=0; i < subDiv.length; i++){
            var elem = subDiv[i]
            var tabcontent = Subtab[i]
            //Subtab[2].classList.remove('active')
            elem.classList.remove('active')
            tabcontent.classList.remove('active')
            
            
            //elem.classList.remove('active')            
        }

    }
//Sets the active Tab
    const Tabcontent = function(text){               
        if(text === 'Home'){
            
            HomepagePage.classList.add('active')
        }
        if(text === 'Menu'){
            MenuPage.classList.add('active')
        }
        if(text === 'Contact'){
            console.log(ContactPage)
            console.log(text)
            ContactPage.classList.add('active')
        }      
    }

    const ActiveTab = function(e){
        Tabfunctionality(TabGroup)
        Tabcontent(this.textContent)
        console.log(e)
        console.log(TabContent)
        this.classList.add('active')        
    }
    div.addEventListener('click', ActiveTab)
    div.addEventListener('mouseover', TabHover )
    div.addEventListener('mouseout', TabUnHover)
} 
//Create a Tabs
const CreateTabs = function(ThisArray){

    ThisArray.forEach(item => {
        
        const NewTab = document.createElement('div')      
        const Tabtext = document.createElement('p')         
        Tabtext.innerHTML = item.Name
        NewTab.className = item.Name +"_Tab"
        NewTab.appendChild(Tabtext)
        EventlisterTabs(NewTab)
        NewTab.classList.add('TabPadding')     
        TabGroup.appendChild(NewTab)    
    });
    TabGroup.classList.add('Tab_group')
    TabContainer.appendChild(TabGroup)
    
    
}

CreateTabs(ListofPages)


