const AddBtn = document.querySelector("#AddBtn");
const main = document.querySelector(".main");

// Renaming the function to avoid conflict with the AddBtn variable
AddBtn.addEventListener("click", addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    
    note.innerHTML = `
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
     </div>
    <textarea></textarea>
    `;

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click",saveNotes);
      textarea.addEventListener("input",saveNotes);
      trash.addEventListener("click",()=>{
        note.remove();
        saveNotes();
      })
    main.appendChild(note);
}

function saveNotes(){
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length === 0){
        localStorage.removeItem("notes");

    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));

    }
}
function loadNotes(){
    const lsnotes = JSON.parse(localStorage.getItem("notes"));

    if(lsnotes !== nul){
        lsnotes.forEach(noteText => {
            addNote();
            const notes = document.querySelectorAll(".note textarea");
              
            const lastNote = notes[notes.length-1];

            lsnotes.value = noteText;
        } );

    }
}
loadNotes();