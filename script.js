const input = document.querySelector('.form-control');
let items = 1;

input.addEventListener('keypress', e => {
    if (e.key !== 'Enter') return;

    const copy = document.querySelector('.form-check').cloneNode(true);
    const id = `checkbox-${items++}`
    copy.children[0].id = id;
    copy.children[1].setAttribute('for', id);
    copy.children[1].innerHTML = document.querySelector('.form-control').value;

    document.querySelector('main').append(copy);

    input.value = '';
});
