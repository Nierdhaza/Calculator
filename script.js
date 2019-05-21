var btns = document.getElementsByClassName('btns');
var inp = document.getElementById('inp');
var str = '';
for (var i=0;i<btns.length;i++) {
    btns[i].addEventListener('click',addNums);
}

function addNums() { 
    var data_value = this.getAttribute('data-val');
    var str = inp.value;
    inp.value += data_value;
    
    if (data_value === '=') {
        str = eval(str);
        inp.value = str;
        return;
    }
    else if (data_value === 'C') {
         str = '';
	}
	else if (data_value ==='<') {
       str = str.slice(0,-1);

	}
    else {
        str+=data_value;
    }
    inp.value = str;
}