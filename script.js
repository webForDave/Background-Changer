let index = 0;

let changeColor = () => {
    let colors = ['red', 'orangered', 'blue', 'black', 'pink', 'purple', 'coral'];

    document.getElementById('body').style.background = colors[index ++];

    if (index > colors.length - 1) {
        index = 0;
    }
}