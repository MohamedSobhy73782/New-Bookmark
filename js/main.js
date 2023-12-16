

var bookmarkInputName = document.getElementById("bookmarkName")
var bookmarkInputUrl = document.getElementById("siteUrl")





var website

if (localStorage.getItem("Websites") != null)
{
   website = JSON.parse(localStorage.getItem("Websites")) 
   displayData ()

}
else
{

    website = []
}


function getData()
{
    var site = {
        name: bookmarkInputName.value ,
        url: bookmarkInputUrl.value
    }

    website.push(site)
    localStorage.setItem("Websites" , JSON.stringify(website) )
    displayData ()
    clearData ()

}

function displayData ()
{
    var cartona = ""

    for (var x=1; x<website.length; x++)
    {
        cartona +=
        `

        <tr>
        <td>${x}</td>
        <td>${website[x].name}</td>
        <td>
        <a href="https://example.com"  target="_blank">
         <button class="btn btn-dark " >
        <i class="fa-regular fa-eye pe-2"></i>
        Visit
         </button>
        </a>  
        </td>
        <td>
          <button onclick="deleteSite (${x})" class="btn btn-secondary "> 
          <i class="fa-solid fa-trash-can pe-2"></i>
          Delete
         </button>
        </td>

      </tr>
        `
    }

    document.getElementById("tbody").innerHTML = cartona
}

function clearData ()
{
    bookmarkInputName.value = ""
    bookmarkInputUrl.value = ""
}

function deleteSite (index)
{
    website.splice(index , 1)
    localStorage.setItem("Websites" , JSON.stringify(website) )
    displayData ()
}





