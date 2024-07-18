import '/style.css'
import Swal from 'sweetalert2'
import { alertSuccess,alertError, validateData } from '/modules/helpers.js'

const params = new URLSearchParams(window.location.search);
const data = { 
    "owner name": {
        value : params.get("owner") || "",
        regex : /^[a-zA-Z\s.,'-]+$/
    },
    "pet name" : {
        value : params.get("pet") || "",
        regex : /^[a-zA-Z\s.,'-]+$/
    },
    "type of pet": {
        value : params.get("petType"),
        regex : /^(Cat|Dog|Other)$/
    },
    "date" : {
        value : params.get("date"),
        regex : /^\d{4}-\d{2}-\d{2}$/
    },
    "comments" :{
        value : params.get("comments"),
        regex : /^[a-zA-Z\s.,'-]*$/
    }
};

const validated = validateData( data );

if (validated.validated) {
    const date = new Date( data["date"].value );
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    alertSuccess( data["owner name"].value, data["pet name"].value, formatter.format(date) );
}else{
    alertError( validated );
}

document.querySelector('#petshop').innerHTML = `

    <div class="h-screen bg-zinc-900 grid place-content-center">    
        <h1 class="text-8xl font-bold text-white">Furry Haven</h1>
    </div>

`
