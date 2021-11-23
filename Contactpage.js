
import Headerimport from './Header.js'
const HeaderSection = Headerimport.CreateHeaderSection
import ContentArray from './Content.js'
const Pageslist = ContentArray.TabContentPages
const Address = {
    Name: 'Address',
    Icon: '<i class="fas fa-map-marker-alt"></i>',
    text: '308 Negra Arroyo Lane, Albuquerque, New Mexico'
}
const Time = {
    Name: 'Time',
    Icon: '<i class="far fa-clock"></i>',
    text: 'Mon-Fri: 9am-10pm',
    Weekends: 'Sat-Sun: 9am-5pm'
}
const Phone = {
    Name: 'Phone',
    Icon: '<i class="fas fa-phone"></i>',
    text: '555-555-5555',
    
}
const CalltoAction = {
    Name: 'CalltoAction',
    Icon: '<i class="fas fa-envelope"></i>',
    text: 'Message Us Today!',
    
}
const ContactFields = [Address, Time, Phone, CalltoAction]
const Contactdiv = document.createElement('div')
const Contactspan = document.createElement('div')

const Textfields = ['First Name', 'Last Name', 'Email', 'Send us a message']

Textfields.forEach(item =>{
    const ContactFieldcontainer = document.createElement('div')
    ContactFieldcontainer.classList.add('FieldContainer')
    const ContactheaderTextdiv = document.createElement('div')
    const ContactheaderText = document.createElement('h5')
    ContactheaderText.innerHTML = item
    ContactheaderTextdiv.append(ContactheaderText)
    Contactdiv.classList.add('Contactform')
    const Contactinput = document.createElement('input')
    Contactinput.classList.add('label-name')
    const ContactName = document.createElement('span')
    ContactName.innerHTML = 'Name'
    Contactspan.append(ContactName)
    ContactName.classList.add('content-name')
    Contactinput.append(Contactspan)
    Contactinput.setAttribute('type', 'text');
    Contactinput.setAttribute('name', 'username');
    Contactinput.setAttribute('placeholder', item);
    ContactFieldcontainer.append(ContactheaderTextdiv, Contactinput)
    Contactdiv.append(ContactFieldcontainer)
})
const ButtonContainer = document.createElement('div');

const ContactButton = document.createElement('button')
ContactButton.innerHTML = 'Submit Form'
ContactButton.classList.add('ContactButton')
ContactButton.addEventListener('click', function(){
    window.alert('Form Submitted!')
})
ButtonContainer.addEventListener('mouseover', function(){
    ContactButton.style.left ='2px'
    ContactButton.style.bottom = '2px'
})
ButtonContainer.addEventListener('mouseout', function(){
    ContactButton.style.left ='-2px'
    ContactButton.style.bottom = '-2px'
})
ButtonContainer.append(ContactButton)
Contactdiv.append(ButtonContainer)


const ContactSection = document.createElement('div')
const ContactSectionh1 = document.createElement('h1')

ContactSection.append(ContactSectionh1)
ContactSection.className = 'Contact'
ContactSection.classList.add('tab-pane')
const LoadContactHeader = function(){
    Pageslist.forEach(item =>{
        if(item.Name === 'Contact'){
            HeaderSection(ContactSection, item)   
        }
    })
}
LoadContactHeader()

const ContactAddress = document.createElement('div')
//const ContactAddressContent = document.createElement('p')
var ContactInformation = document.createElement('div')

const CreateContactField = function(Name, Icon, Text){
    //Wrapper
    const ContactField = document.createElement('div')
    //Content1
    const ContactFieldicon = document.createElement('div')
    ContactFieldicon.innerHTML =  Icon
    ContactFieldicon.classList.add('ContactIcon')
    //Content2
    const ContactFieldInfo = document.createElement('div')
    if(Name === 'Time'){
        const ContactInfo = document.createElement('div')
        const ContactTime = document.createElement('div')
        ContactInfo.innerHTML = Text
        ContactTime.innerHTML = 'Sat-Sun: 9am-5pm'
        ContactFieldInfo.append(ContactInfo, ContactTime)
        console.log(ContactFieldInfo)
    }
    if(Name === 'CalltoAction'){
        ContactField.classList.add('center')
        ContactFieldInfo.innerHTML = Text
    }
    else{
        ContactFieldInfo.innerHTML = Text
    }
    ContactFieldicon.innerHTML = Icon; 
    ContactField.classList.add('ContactInfo')
    ContactField.append(ContactFieldicon,ContactFieldInfo)
    return ContactField 
}
ContactFields.forEach(item =>{
    console.log(item.Name)
    const content = CreateContactField(item.Name, item.Icon, item.text)
    console.log(content)
    ContactInformation.append(content) 
})

ContactInformation.classList.add('ContactSection')
ContactInformation.append(Contactdiv)
ContactSection.append(ContactInformation)

export default {ContactSection}