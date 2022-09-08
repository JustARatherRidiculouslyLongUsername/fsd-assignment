const input = document.querySelector('.form-control');

input.addEventListener('keypress', e => {
    if (e.key !== 'Enter') return;

    const copy = document.querySelector('.form-check').cloneNode(true);
    copy.children[1].innerHTML = document.querySelector('.form-control').value;

    document.querySelector('main').append(copy);

    input.value = '';
});
