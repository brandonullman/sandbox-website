function menuButton(x) {
    x.classList.toggle('change');
    document.querySelector('nav').classList.toggle('change');
    document.querySelector('nav-buttons').classList.toggle('change');
}

let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.button');

btns.forEach(function (button) {
    button.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})