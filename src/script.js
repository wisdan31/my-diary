const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
let currentCell = null;

// Open the modal and set the current cell
function openModal(cell) {
    modal.style.display = "flex";
    currentCell = cell;
}

// Close modal on button click or click outside
closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Handle form submission
document.getElementById("subjectForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const subjectName = document.getElementById("subjectName").value;

    // Example: Send data to MongoDB API
    const response = await fetch('/add-subject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            day: currentCell.cellIndex,
            time: currentCell.parentNode.rowIndex,
            subject: subjectName
        })
    });

    if (response.ok) {
        currentCell.innerHTML = subjectName;  // Update cell with subject
        modal.style.display = "none";  // Close the modal
        document.getElementById("subjectForm").reset();  // Clear form
    } else {
        alert("Failed to save subject.");
    }
});
