var xhr = new window.XMLHttpRequest();

// function onSubmitEmailClick(){
//         var email = {
//                 email : document.getElementById('email').value
//         }
//         console.log(`data that we typed in html file is ${email}`)
//         xhr.open("POST", 'http://localhost:3000/email', true);
//         xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//         xhr.onreadystatechange = function (){
//                 if(xhr.readyState == 4 &&  xhr.status == 200){
//                         console.log(xhr.responseText)
//                 }
//                 //console.log(xhr.response)  // res.send respone.
//                // d = document.createElement("label, text, button ")
//                 //d.innerHTML()
//                 //mighht create a table and put notes thete
//         }
//        xhr.send(JSON.stringify(email))
//         //console.log(`data sending via http requst is ${da}`)
//         //document.getElementById("note").innerHTML = x;
//         // /email ->notes.html
//         //send post reqest to server that will pass data to scripts.js -> email
// //create button  and text
// }



function onSubmitEmailClick() {
        var email = {
        email: document.getElementById('email').value,
                note : []
}
        //var email = {email:document.getElementById('email').value}
        console.log(email)
        var xhr = new window.XMLHttpRequest()
        xhr.open('POST', 'http://localhost:3000/email', true)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.onreadystatechange = () => {
                if(xhr.readyState === 4 && xhr.status === 200) {
                        console.log("response from server")
                        console.log(xhr.responseText)

                }
        }
        xhr.send(JSON.stringify(email))

        //xhr.response()

}

function displyNotes(){

        var btn = document.createElement("BUTTON");
        var add = document.createTextNode("ADD");
        btn.appendChild(add);
        document.body.appendChild(btn);

        var note = document.createElement("INPUT");
        note.setAttribute("type", "text");
        document.body.appendChild(note);


        const x = document.createElement("table")
        x.setAttribute("id", table)
        document.body.appendChild(x)

        const y = document.createElement("tr")
        y.setAttribute('id',row)
        document.getElementById("table").appendChild(y)

        const z = document.createElement("td")


        }


function pullDatafromDb() {

}