var form = document.querySelector('form')

        form.addEventListener('submit', (e) => {
            // e.preventDefault()

            var fname = form.fname.value
            var lname = form.lname.value
            var email = form.email.value
            var pnumber = form.pnumber.value
            var message = form.message.value

            console.log(fname, lname, email, pnumber, message);

    //         try{
    //      await fetch('/success', {
    //            method: 'POST',
    //            body: JSON.stringify({
    //                fname: fname,
    //                lname: lname,
    //                pnumber: pnumber,
    //                email: email,
    //                message: message
    //            }),
    //            headers: {'Content-Type': 'application/json'}
    //        }).then(res => res.json())
    //    }
    //    catch(err){
    //        console.log(err.toString())
    //    }
        })