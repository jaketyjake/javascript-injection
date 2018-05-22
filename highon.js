let link = document.createElement("link")
document.head.appendChild(link)
link.rel="stylesheet"
link.type="text/css"
link.href="javahigh.css"

let containerDiv = document.createElement("div")
containerDiv.className="maintainer"
document.body.appendChild(containerDiv)

let bannerDiv = document.createElement('div')
bannerDiv.className="banner"
containerDiv.appendChild(bannerDiv)

let bannerUl= document.createElement("ul")
bannerUl.className="banner-ul"
bannerDiv.appendChild(bannerUl)

let logoLi=document.createElement("li")
logoLi.className="logo"
bannerUl.appendChild(logoLi)
logoLi.append("HighOnCoding")

let homeLi=document.createElement("li")
homeLi.className="homeLi"
bannerUl.appendChild(homeLi)
homeLi.append("Home")

let servicesLi=document.createElement("li")
servicesLi.className="servicesLi"
bannerUl.appendChild(servicesLi)
servicesLi.append("Categories")

console.log("worksthisfar")