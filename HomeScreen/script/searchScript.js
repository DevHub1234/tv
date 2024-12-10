function search() {
    
   
        let searchValue = document.getElementById("searchBar").value.trim().toLowerCase();
    
        if (searchValue === "the shawshank redemption" || searchValue === "shawshank redemption") {
            document.getElementById("SR").showModal();
        } else if (searchValue === "moana" || searchValue === "moana 2016") {
            document.getElementById("MOANA").showModal();
        } else if (searchValue === "saw" || searchValue === "saw 2004") {
            document.getElementById("SAW").showModal();
        } else if (searchValue === "she's too young" || searchValue === "shes too young" || searchValue === "she too young") {
            document.getElementById("STY").showModal();
        }  else {
            document.getElementById("NotFound").showModal()
            document.getElementById("notfoundtext").innerHTML = `It Did not find anything about "${searchValue}", watch out for typos ! <br><br> <img src="https://cdn-icons-png.flaticon.com/128/5058/5058046.png" alt="Nothing Found?" height="100px">`;
        }
    
    

}