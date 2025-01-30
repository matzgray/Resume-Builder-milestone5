function addNewWEField() {
    // console.log("adding");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
   
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");


    let weOb = document.getElementById("we")as HTMLInputElement;
    let weAddButtonOb = document.getElementById("weAddButton")as HTMLInputElement;

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField() {
    // console.log("adding");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    // newNode.classList.add("margin 4")
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");


    let aqOb = document.getElementById("aq")as HTMLInputElement;
    let aqAddButtonOb = document.getElementById("aqAddButton")as HTMLInputElement;

    aqOb.insertBefore(newNode, aqAddButtonOb)
}

// generate cv

function generateCV() {
    let nameField = (document.getElementById("nameField")as HTMLInputElement).value;

    let nameT1: HTMLElement | null = document.getElementById('nameT1');

    let nameT2: HTMLElement | null  = document.getElementById('nameT2');
if(nameT1 != null){
    nameT1.innerHTML = nameField;
}
if(nameT2 != null){
    nameT2.innerHTML = nameField;
}
    // contact
    const contactT: HTMLElement | null = document.getElementById("contactT");
    if (contactT != null){contactT.innerHTML =(document.getElementById("contactField")as HTMLInputElement).value;

    }

    // adress
    const adressT: HTMLElement | null = document.getElementById("adressT");
    if (adressT != null){adressT.innerHTML =(document.getElementById("adressField")as HTMLInputElement).value;

    }

    

    //FBfield

    const fbT: HTMLElement | null = document.getElementById("fbT");
    if (fbT != null){fbT.innerHTML =(document.getElementById("fbField")as HTMLInputElement).value;

    }
    

    //instagram
    const instaT: HTMLElement | null = document.getElementById("instaT");
    if (instaT != null){instaT.innerHTML =(document.getElementById("instaField")as HTMLInputElement).value;

    }

    

    //linked-inn
    const linkedT: HTMLElement | null = document.getElementById("linkedT");
    if (linkedT != null){linkedT.innerHTML =(document.getElementById("linkedField")as HTMLInputElement).value;

    }

    //email
    const emailT: HTMLElement | null = document.getElementById("emailT");
    if (emailT != null){emailT.innerHTML =(document.getElementById("emailField")as HTMLInputElement).value;

    }


   

    //ObjectiveField
    const objectiveT: HTMLElement | null = document.getElementById("objectiveT");
    if (objectiveT!= null){objectiveT.innerHTML =(document.getElementById("objectiveField")as HTMLInputElement).value;

    }




    //work experience

    let wes:HTMLCollectionOf<HTMLTextAreaElement> = document.getElementsByClassName("weField")as HTMLCollectionOf<HTMLTextAreaElement>;

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;

    }
    const weT:HTMLElement | null = document.getElementById("weT");
    if(weT != null){
        weT.innerHTML = str
    }


    //acedmic qualification

    let aqs:HTMLCollectionOf<HTMLTextAreaElement>  = document.getElementsByClassName("eqField")as HTMLCollectionOf<HTMLTextAreaElement> ;
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    const aqT:HTMLElement | null =  document.getElementById("aqT");
    if(aqT != null){
        aqT.innerHTML =str1
    }

    (document.getElementById('cv-form')as HTMLElement).style.display = 'none';
    (document.getElementById('cv-templete')as HTMLElement).style.display = 'block';
}


//print CV

function printCV() {
    window.print()
}



//Edit CV 
function editCV() {
    (document.getElementById('cv-templete')as HTMLInputElement).style.display = 'none';
    (document.getElementById('cv-form')as HTMLInputElement).style.display = 'block';

}

//Share CV

const shareBtn = document.querySelector("#shareBtn");
if(shareBtn){
shareBtn.addEventListener("click", (event) => {
    if (navigator.share) {
        navigator.share({
            title: "Resume Builder",
            url: "https://www.vercel.com",

        }).then(() => {
            console.log("Thanks for sharing");

        }).catch((err) => {
            console.log("Error using web share API :");
            console.log(err);


        })
    } else { 
        alert("Browser doesn't support this web share API")
    }
})
}