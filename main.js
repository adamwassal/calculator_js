var entry = document.getElementById('entry')


function enter(v){
    entry.value += v;
}

function equel(){
    try {
        x = eval(entry.value);
    }
    catch {
        x = 'Math error press(CLR)'
    }
    value = '';
    entry.value = x;
}


function del(){
    entry.value= entry.value.slice(0,-1)
}

function clr(){
    entry.value=''
}
