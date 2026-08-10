
// // 1. Get Saved Notes


// let data = JSON.parse(localStorage.getItem("notes")) || [];
// let editId = null;

// const $ = id => document.getElementById(id);



// // 2. Save Notes to LocalStorage


// function save() {
//   localStorage.setItem("notes", JSON.stringify(data));
// }



// // 3. Display Notes


// function show(list = data) {
//   $("notes").innerHTML = list.map(note => `
//     <div class="card bg-base-100 shadow-md">
//       <div class="card-body">

//         <h2 class="card-title">${note.title}</h2>

//         <p>${note.content}</p>

//         <small class="text-gray-500">
//           Last edited: ${new Date(note.updatedAt).toLocaleString()}
//         </small>

//         <div class="card-actions justify-end">

//           <button
//             class="btn btn-sm btn-warning"
//             onclick="editNote(${note.id})">
//             Edit
//           </button>

//           <button
//             class="btn btn-sm btn-error"
//             onclick="deleteNote(${note.id})">
//             Delete
//           </button>

//         </div>

//       </div>
//     </div>
//   `).join("");
// }



// // 4. Add or Update Note


// $("form").onsubmit = e => {
//   e.preventDefault();

//   const title = $("title").value.trim();
//   const content = $("content").value.trim();

//   // Validation
//   $("titleError").innerText = title ? "" : "Title is required";
//   $("contentError").innerText = content ? "" : "Content is required";

//   if (!title || !content) return;


//   // Update Existing Note
//   if (editId) {

//     const note = data.find(note => note.id === editId);

//     note.title = title;
//     note.content = content;
//     note.updatedAt = new Date();

//     editId = null;

//   }

//   // Add New Note
//   else {

//     data.unshift({
//       id: Date.now(),
//       title,
//       content,
//       updatedAt: new Date()
//     });

//   }

//   save();
//   e.target.reset();
//   show();
// };



// // 5. Edit Note


// function editNote(id) {

//   const note = data.find(note => note.id === id);

//   $("title").value = note.title;
//   $("content").value = note.content;

//   editId = id;
// }



// // 6. Delete Note


// function deleteNote(id) {

//   data = data.filter(note => note.id !== id);

//   save();
//   show();
// }



// // 7. Search Notes


// $("search").oninput = e => {

//   const text = e.target.value.toLowerCase();

//   const result = data.filter(note =>
//     note.title.toLowerCase().includes(text) ||
//     note.content.toLowerCase().includes(text)
//   );

//   show(result);
// };



// show();