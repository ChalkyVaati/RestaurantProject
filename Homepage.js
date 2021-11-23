import Headerimport from './Header.js'
const HeaderSection = Headerimport.CreateHeaderSection
import ContentArray from './Content.js'

const Pageslist = ContentArray.TabContentPages
const HomepageSection = document.createElement('div')
const HomepageButton = document.createElement('button')
const HomepageButtondiv = document.createElement('div')
const HomepageLink = document.getElementsByClassName('.Menu')
console.log(HomepageLink)
HomepageButton.addEventListener('click', function(){
    HomepageLink.classList.add('.active')
    window.alert("sometext");
})
HomepageButtondiv.classList.add('Homepagebuttondiv')
HomepageButton.innerHTML = 'Check out our Menu!'
HomepageButton.classList.add('active')


HomepageSection.className = 'Home'
HomepageSection.classList.add('tab-pane')
HomepageSection.classList.add('Landing')
const LoadHomeHeader = function(){
    Pageslist.forEach(item =>{
        if(item.Name === 'Home'){
            HeaderSection(HomepageSection, item)   
        }
    })
    HomepageSection.classList.add('homescreenlanding')
}
LoadHomeHeader()
HomepageSection.append(HomepageButtondiv)
export default {HomepageSection}