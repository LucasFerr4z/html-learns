const comunityForm = document.getElementById('comunity-form');
const comunityList = document.getElementById('comunity-list');

comunityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getEelementById('comunity').value;
    const description = document.getElementById('comunity-description').value;
    createComunity(name, description);
});

function createComunity(name, description) {
    const comunityItem = document.createElement('div');
    comunityItem.innerHTML =`<h2>${name}</h2><p>${description}</p>`;
    comunityList.appendChild(comunityItem);
}