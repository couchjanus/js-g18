// ======================initStorage==============================

function initStorage() {
    try { 
        localStorage.getItem("basket") ?
        localStorage.getItem("basket") :
        localStorage.setItem("basket", JSON.stringify([]));
        return true;
    } catch (e) {
      	if (e == QUOTA_EXCEEDED_ERR) { 
            console.log('Превышен лимит localStorage');  
        }
        return false;
    }
}

function getProducts() {
    return JSON.parse(window.localStorage.getItem("basket"));
}
