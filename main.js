let box = document.querySelectorAll('.box');

let title = document.getElementById('title')


// TAKE THE NAME OF THE PLAYERS 
let first_name = prompt("frist player");
let second_name = prompt("second player");

let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
// AND PUT THEM IN THIER DIV
p1.innerHTML = `<h3>${first_name}(X)</h3>`
p2.innerHTML = `<h3>${second_name}(O)</h3>`
// ////////////////////////////////////////////////

rolplay = 'X';

// MAKE THE ACTIVE PLAYER TAKE BACKGROUND COLOR
function active_player() {
    // p1.classList.toggle('active')
    // p2.classList.toggle('active')

    if ("X" == rolplay) {
        p1.classList.add('active')
        p2.classList.remove('active')
    } else {
        p2.classList.add('active')
        p1.classList.remove('active')
    }
}

let the_win = document.getElementById('the_win')
let win = document.getElementById('win')
function who(n1,n2,n3) {
    document.getElementById('b'+n1).style.backgroundColor = 'red';
    document.getElementById('b'+n2).style.backgroundColor = 'red';
    document.getElementById('b'+n3).style.backgroundColor = 'red';
    if (boxs[n1] == '<h2>X</h2>') {
        the_win.innerHTML = `the winner is <span>${first_name}(X)</span>💪`;
    } else {
        the_win.innerHTML = `the winner is <span>${second_name}(O)</span>💪`;
    }
    win.style.display = 'flex';
    





    if (rolplay == "O") {
        xscour = parseInt(player_x.innerText);
        player_x.innerHTML = (xscour += 1);
    }else if(rolplay == "X"){
        yscour = parseInt(player_y.innerText);
        player_y.innerHTML = (yscour += 1);
        console.log('yyyyyyyyyyyyy')
    }


}
let boxs = [];
function winer() {
    for (let i = 1; i < 10; i++) {
        boxs[i] = document.getElementById('b'+i).innerHTML;
    }

    if (boxs[1] == boxs[2] && boxs[2] == boxs[3] && boxs[3]  != "") {
        who(1,2,3)
    }else if(boxs[4] == boxs[5] && boxs[5] == boxs[6] && boxs[6]  != ""){
        who(4,5,6)
    
    }else if(boxs[7] == boxs[8] && boxs[8] == boxs[9] && boxs[9]  != ""){
        who(7,8,9)
    
    }else if(boxs[1] == boxs[4] && boxs[4] == boxs[7] && boxs[7]  != ""){
        who(1,4,7)
    
    }else if(boxs[2] == boxs[5] && boxs[5] == boxs[8] && boxs[8]  != ""){
        who(2,5,8)
    
    }else if(boxs[3] == boxs[6] && boxs[6] == boxs[9] && boxs[9]  != ""){
        who(3,6,9)
    
    }else if(boxs[1] == boxs[5] && boxs[5] == boxs[9] && boxs[9]  != ""){
        who(1,5,9)
    
    }else if(boxs[3] == boxs[5] && boxs[5] == boxs[7] && boxs[7]  != ""){
        who(3,5,7)
    }else if(boxs.every(box => box !== "")){
        the_win.innerHTML = `it is tie!!`;
        win.style.display = 'flex';
    }
    
}









box.forEach(box => {


    box.onclick = function(){

        if (box.innerHTML == "") {
            if (rolplay == 'X') {
                this.innerHTML = `<h2>${rolplay}</h2>`;
                rolplay = 'O';
                active_player()
            } else {
                this.innerHTML = `<h2>${rolplay}</h2>`;
                rolplay = 'X';
                active_player()
            }
        } else {
            return false;
        }       

        
        winer()
    }


});







/////////////////////////////////////




let play_a = document.getElementById('play_a')
let play_d = document.getElementById('play_d')




play_d.onclick = function(){
    location.reload()
}



let player_x = document.getElementById('player_x')
let player_y = document.getElementById('player_y')

play_a.onclick = function(){


    box.forEach(box => {
        box.innerHTML = ''
        win.style.display = 'none';
        box.style.backgroundColor = 'rgb(19, 41, 164)';
        rolplay = 'X';
        active_player();

    })
    
}



