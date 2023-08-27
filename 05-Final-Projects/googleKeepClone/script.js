
const addButton = document.querySelector('#add');
// defining the updateLSData
const updateLSData = ()=>{
    const textareaData = document.querySelectorAll('textarea');
    const notes = [];
    console.log(textareaData);
    textareaData.forEach((note)=>{
           return notes.push(note.value);
    })

    console.log(notes);
    // using the local storage 
    localStorage.setItem('notes' , JSON.stringify(notes));
}


// if the fat awwor function is used on click  then it is first the function should be define and
// the it should be called 
const addNewNote = (text = '')=>{

    // creating the new div and class and inserting the html code in js
       const note = document.createElement('div');
       note.classList.add('note');

       const htmlData = `
       <div class="operation">
            <button class="edit"> <i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
       <div class="main ${text ? "" : "hidden"}"></div>
       <textarea class="${text ? "hidden" : ""}"></textarea>  `;

       note.insertAdjacentHTML('afterbegin' , htmlData);
        console.log(note);

    // getting the references
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const maindiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    // deleting the note.....
    delButton.addEventListener( 'click' ,()=>{
        note.remove();
        updateLSData();
    })

    // toogling the note. stop the writing of the text and converted into the main div
    // toogle using editButton
    textarea.value = text;
    maindiv.innerHTML = text;

    editButton.addEventListener('click' , ()=>{
             maindiv.classList.toggle('hidden');
             textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change' ,(event)=>{
            const  value = event.target.value;
            console.log(value);
            maindiv.innerHTML = value;


            updateLSData();
    })



     document.body.appendChild(note);
     // it apends a node as a last child of a node


}

// getting data back from the local storage

const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note)=> addNewNote(note) )};



addButton.addEventListener('click' , ()=>  addNewNote() );









/*                        <--------Note--------->
      
createElement() method is used to create a html tag

*/