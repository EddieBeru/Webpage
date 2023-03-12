var appData = []

fetch('appData.json')
.then(response => response.json())
.then(data => {
  // The data variable contains the loaded dictionary
  appData = data;
  console.log(appData);
  enlistar();
})
.catch(error => console.error(error));

function enlistar() {
  const appList = document.getElementById("appList");

  appData.forEach((app) => {
    const appItem = document.createElement('div');
    const appInfoCont = document.createElement('div');
    const appName = document.createElement('h3');
    const appIcon = new Image();
    const appDescription = document.createElement('p');
    const appLinks = document.createElement('div');
    
    appItem.className = "AppItem";
    appLinks.className = "LinksList";
    appInfoCont.className = "AppInfoCont";
  
    appIcon.src = app.icon;
    appIcon.width = 30;
    appIcon.height = 30;
  
    appName.textContent = app.name;
    appDescription.textContent = app.description;
    appItem.color = app.color;
  
    try {
        app.links.forEach(link => {
            const linkItem = document.createElement('div');
            const linkElement = document.createElement('a');
            const imageElement = new Image();
            
            linkItem.className = "LinkItem";
    
            linkElement.textContent = link.name;
            linkElement.href = link.link;
  
            imageElement.src = link.icon;
            imageElement.width = 20;
            imageElement.height = 20;
    
            linkItem.appendChild(imageElement);
            linkItem.appendChild(linkElement);
            appLinks.appendChild(linkItem);
        });
    } catch (error) {
        const linkItem = document.createElement('div');
        const linkElement = document.createElement('p');
  
        linkElement.textContent = "No hay links disponibles";
  
        linkItem.appendChild(linkElement);
        appLinks.appendChild(linkItem);
    }
    
    appInfoCont.appendChild(appIcon);
    appInfoCont.appendChild(appName);
    appItem.appendChild(appInfoCont);
    appItem.appendChild(appDescription);
    appItem.appendChild(appLinks);
  
    appList.appendChild(appItem);
  });
  
}

