function solve() {
    const param1 = document.querySelector('#text').value;
    const param2 = document.querySelector('#naming-convention').value;

    const words = param1.split(' ').map(word => word.toLowerCase());
    let result = '';

    if (param2 === 'Pascal Case' || param2 === 'Camel Case') {
        result = words.map((word, index) =>
            index === 0 && param2 === 'Camel Case' ? word : word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        if (param2 === 'Pascal Case') {
            result = result.charAt(0).toUpperCase() + result.slice(1);
        }
    } else {
        result = 'Error!';
    }

    document.querySelector('#result').textContent = result;
}
