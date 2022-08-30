const searchURL = window.location.search; 
const decoded = decodeURIComponent(searchURL)
            .replace(/\?/g,'')      // removes initial "?"
            .replace(/ /g,'')       // removes all whitespace
            .replace(/,]/g,']')     // replaces the "," in front of "]" ... typical bug
const urlToObject = JSON.parse(`{${decoded}}`);

if( Object.values(urlToObject).length > 0 ){

    for ( [key, value] of Object.entries(urlToObject)){
        let parentDIVClone = document.querySelector(`#${key}`)
        let revisedSubDivs=[];

        for (val of value) {  revisedSubDivs = [ ...revisedSubDivs, 
                                                    parentDIVClone.querySelector(`#${val}`) 
                                               ]          
        }

        parentDIVClone.innerHTML='';
        revisedSubDivs.forEach( el => parentDIVClone.appendChild(el) ) 
    }
}

