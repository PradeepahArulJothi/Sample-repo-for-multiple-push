// index.html

function studentSubmit() {
    var studentName = document.getElementById("stuName").value;
    var studentAge = document.getElementById("stuAge").value;
    const male = document.getElementById("stuMale");
    const female = document.getElementById("stuFemale");

    let studentGender = male.checked ? "Male" : "Female";

    var studentCourse = document.getElementById("stuCourse").value;
    var studentEmail = document.getElementById("stuEmail").value;

    if (studentName && studentAge && studentGender && studentCourse && studentEmail) {
        document.getElementById("myDiv").classList.remove("hidden");

        var gridContainer = document.querySelector(".grid-container");
        gridContainer.innerHTML += `
        <div class="grid-item">${studentName}</div>
        <div class="grid-item">${studentAge}</div>
        <div class="grid-item">${studentGender}</div>
        <div class="grid-item">${studentCourse}</div>
        <div class="grid-item">${studentEmail}</div>
         <div class="grid-item">
     
        <button class="grid-delete" id="stuDelete">Delete</button>
         </div>
        `;

        // Reset Form
        document.getElementById("studentForm").reset();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".grid-container").addEventListener("click", function (event) {
        // Prevent default page reload on submission
        event.preventDefault();

        if (event.target.classList.contains("grid-delete")) {

            let actionCell = event.target.parentElement;

            for (let i = 0; i < 5; i++) {
                actionCell.previousElementSibling.remove();
            }

            actionCell.remove();

            // Check if only header is left
            const gridContainer = document.getElementById("myDiv");
            if (gridContainer.children.length === 6) {
                gridContainer.classList.add("hidden");
            }
        }

    });


});




