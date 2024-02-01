// script.js

document.addEventListener('DOMContentLoaded', function () {
    openPersonalNoteModal();
});

function openPersonalNoteModal() {
    // Display the modal as a popup
    document.getElementById('personalNoteModal').style.display = 'block';
}

function closePersonalNoteModal() {
    // Close the modal
    document.getElementById('personalNoteModal').style.display = 'none';
}