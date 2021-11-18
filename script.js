let dead = 1;

function up () {
    let t = parseInt(document.getElementById('kenny').style.top);
    if (t > 0)
        t = t - 10;
    document.getElementById('kenny').style.top = t + 'px';
}

function left () {
    let l = parseInt(document.getElementById('kenny').style.left);
    if (l > 35)
        l = l - 10;
    else {
        document.getElementById('kenny').style.top = "200px";
        l=200;
        alert('Kenny est mort espèce d\'enfoiré !' + " " + dead);
        dead++
    }
    document.getElementById('kenny').style.left = l + 'px';
}

function right() {
    let r = parseInt(document.getElementById('kenny').style.left);
    if (r < 500 -35)
        r = r + 10;
    document.getElementById('kenny').style.left = r + 'px';
}

function down () {
    let d = parseInt(document.getElementById('kenny').style.top);
    if (d < 500 - 35)
        d = d + 10;
    document.getElementById('kenny').style.top = d + 'px';
}


document.getElementById('up').addEventListener('click', function (){
    up()
});

document.getElementById('left').addEventListener('click',function (){
    left()
});

document.getElementById('right').addEventListener('click',function () {
    right()
});

document.getElementById('down').addEventListener('click',function () {
    down()

});
document.onkeydown = function handleKeyDown(e) {
    let key = e.keyCode;
    switch (key) {
        case 37:
            left()
            break;
        case 38:
            up()
            break;
        case 39:
            right()
            break;
        case 40:
            down()
            break;
    }
}

//other

let view = document.getElementById('viewport');

let color = document.createElement('div');
color.style.width='50px';
color.style.height= '500px';
color.style.backgroundColor = 'red';
view.prepend(color);


