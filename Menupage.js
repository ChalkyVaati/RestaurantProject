
import Headerimport from './Header.js'
const HeaderSection = Headerimport.CreateHeaderSection
import ContentArray from './Content.js'
const Pageslist = ContentArray.TabContentPages



//CreateHeader('Menu')

const MenuPage = document.createElement('div')
MenuPage.className = 'Menu'
MenuPage.classList.add('tab-pane')

const LoadMenuHeader = function(){
    Pageslist.forEach(item =>{
        if(item.Name === 'Menu'){
            HeaderSection(MenuPage, item)   
        }
    })
}
LoadMenuHeader()
const MilkTea = {
    Name: 'Milk Tea',
    Price: '$5.95',
    BobaImg: 'Img/Milktea.jpg',
    Ingredients: ' Black tea, milk, sugar and tapioca pearls, ',
}
const Matcha = {
    Name: 'Matcha',
    Price: '$5.95',
    BobaImg: 'Img/Matchatea.jpg',
    Ingredients: 'Matcha green tea, honey, sweetener, Almond Milk, cooked tapioca pearls',
}
const Thai = {
    Name: 'Thai',
    Price: '$5.95',
    BobaImg: 'Img/Thaitea.jpg',
    Ingredients: 'Taro tea, milk, sugar and tapioca pearls, ',
}
const Honeydew = {
    Name: 'Honeydew',
    Price: '$5.95',
    BobaImg: 'Img/Honeydew.jpg',
    Ingredients: 'Honeydew syrup, oolong tea, milk, sugar and tapioca pearls, ',
}

const BobaMenu =[MilkTea, Matcha, Thai, Honeydew]

const CreateBobaItems = function(ThisBoba){
    //CreateHeaderSection() 
    ThisBoba.forEach(item => {
        const MenuItem = document.createElement('div')
        const MenuHeader = document.createElement('div')
        const MenuTitle = document.createElement('div')
        const MenuPrice = document.createElement('div')
        const MenuInformation = document.createElement('div')
        const MenuIngredients = document.createElement('div')
        const Menuimg = document.createElement('div')
        var img = document.createElement('img')
        img.src = item.BobaImg
        img.classList.add('Menuitemimg')
        Menuimg.appendChild(img)
        MenuIngredients.innerHTML = item.Ingredients
        MenuTitle.append(item.Name)
        MenuPrice.append(item.Price)
        MenuTitle.classList.add('MenuItemTitle')
        MenuItem.classList.add('MenuItemContainer')
        MenuHeader.classList.add('MenuItemHeader')
        MenuIngredients.classList.add('MenuIngredients')
        Menuimg.classList.add('Menuitemimg')
        MenuItem.append(Menuimg)
        MenuHeader.append(MenuTitle, MenuPrice)
        MenuInformation.append(MenuHeader,MenuIngredients)
        MenuInformation.classList.add('MenuInformation')
        MenuItem.append(MenuInformation)
        MenuPage.append(MenuItem)  
        
    })
    return MenuPage
}
const Menupageload = CreateBobaItems(BobaMenu)

//This will Return the Boba Menupage contents 'menu'
export default {Menupageload}