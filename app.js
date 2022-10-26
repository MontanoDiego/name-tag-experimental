const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

const updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', () => {
    console.log('button press');
    const nameInput = document.getElementById('nameInput');
    nameDisplay.textContent = nameInput.value;
});

const colorDropdown = document.getElementById('colorSelector');
colorDropdown.addEventListener('change', () => {
    console.log('change has been made');

    nameDisplay.classList.remove('purple');
    nameDisplay.classList.remove('red');
    nameDisplay.classList.remove('gray');
    nameDisplay.classList.add(colorDropdown.value);
});


