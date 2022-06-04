const customEl = document.getElementsByTagName("custom");

  for (el of customEl) {

    let theHeight = ( el.getAttribute("height") !== null ) ? el.getAttribute("height")
                                                           : "1000px"

    let theColor = ( el.getAttribute("color") !== null ) ? el.getAttribute("color")
                                                         : "#02ebb9"
                                                         
    el.innerHTML = ` 
      <details class="solutions4Toggle">
        <summary> ${el.getAttribute("name")} </summary>

        <iframe style=" width:100%; height:${theHeight}; border-left:thick solid ${theColor};" frameBorder="0" src="${el.getAttribute("src")}">
          <p>Your browser does not support iframes.</p>
        </iframe>
        
      </details>
      `
  }