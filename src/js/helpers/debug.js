export default function debug() {
    let counter = 0;
    document.addEventListener('keydown', e => {
        if (e.key === 'd') {
            counter++;
        } else {
            counter = 0;
        }

        if (counter === 5) {
            const ul = document.createElement('ul');
            ul.classList.add('site-container');
            ul.classList.add('debug-grid');
            for (let i = 0; i < 8; i++) {
                const li = document.createElement('li');
                ul.append(li);
            }

            document.body.prepend(ul);

            document.body.classList.add('debug');
        }
    });
}
