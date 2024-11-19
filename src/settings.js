document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('themeSelect');

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    // Apply theme when selection changes
    themeSelect.addEventListener('change', () => {
        const selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
        localStorage.setItem('theme', selectedTheme);
    });
});

// Function to apply the selected theme
function applyTheme() {
    const theme = document.getElementById('themeSelect').value;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}
