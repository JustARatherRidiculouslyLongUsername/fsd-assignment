const input = document.querySelector('.form-control');
let items = 1;

const checkboxHandler = e => {
    if (e.target.checked)
        e.target.parentNode.children[1].classList.add('striked');
    else
        e.target.parentNode.children[1].classList.remove('striked');

    console.log(e.target.parentNode.children[1].classList)
}

document.querySelector('input[type=checkbox]').addEventListener('change', checkboxHandler);

input.addEventListener('keypress', e => {
    if (e.key !== 'Enter') return;

    const copy = document.querySelector('.card').cloneNode(true);
    const id = `checkbox-${items++}`

    const checkbox = copy.children[0].children[0];
    checkbox.id = id;
    checkbox.checked = false;
    checkbox.addEventListener('change', checkboxHandler);

    const label = copy.children[0].children[1];
    label.setAttribute('for', id);
    label.innerHTML = document.querySelector('.form-control').value;
    label.classList.remove('striked');

    document.querySelector('main').append(copy);

    input.value = '';
});
