import Swal from 'sweetalert2'
export function validateData( data ) {
    const errs = [];
    for (const key in data) {
        console.log( key, data[key].regex.test( data[key].value ) )
        if( !data[key].regex.test( data[key].value ) ){
            errs.push( `Invalid ${key}` )
        }
    }
    return { validated : errs.length === 0, errors: errs }
}

export function alertSuccess( name, petname, date ){
    Swal.fire({
        position: "center",
        heightAuto: false,
        icon: "success",
        html: `
            <h2 class="text-2xl font-bold">Appointment Successfully Registered!</h1>
            <h3 class="text-xl">Dear <strong>${name}</strong>,</h3>
            <p class="">We are pleased to inform you that your appointment at Furry Haven has been successfully registered.</p>
            <p class="">Date of Appointment: <strong>${date}</strong></p>
            <p class="">Pet Name: <strong>${petname}</strong></p>
            <p class="">Thank you for trusting us with your pet's care!</p>
        `,
        showConfirmButton: true,
        confirmButtonText: "Back to Furry Haven",
        confirmButtonColor: "#1d1d1d",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = document.referrer;
        }
      });
} 

export function alertError( validated ){
    Swal.fire({
        position: "center",
        heightAuto: false,
        icon: "error",
        html: `
            <p style="text-align: left">We regret to inform you that your appointment at Furry Haven could not be registered due to the following errors: </p>
            <ul style="list-style:inside; padding-left: 1rem; display: flex !important; flex-direction: column; gap: 0.5rem; align-items: flex-start">
                ${validated.errors.map( (err) => `<li style="color:#b91c1c">${err}</li>` ).join('')}
            </ul>
            <p style="text-align: left">Please review the errors and correct them in the form, then try submitting again.</p>
        `,
        showConfirmButton: true,
        confirmButtonText: "Back to Furry Haven",
        confirmButtonColor: "#1d1d1d",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = document.referrer;
        }
      });
}