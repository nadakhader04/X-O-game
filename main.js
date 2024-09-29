const onePerson = document.querySelector('.onePerson');
const twoPerson = document.querySelector('.twoPerson');


let flag = true;
onePerson.addEventListener('click', ()=>{
    flag = false;
    localStorage.setItem('one', JSON.stringify(onePerson));
    twoPerson.style.display = 'block';
    onePerson.style.display = 'none';

    reload();
});

twoPerson.addEventListener('click', ()=>{
    flag = true;
    onePerson.style.display = 'block';
    twoPerson.style.display = 'none';
    
    reload();
})

function reload(){
    title.innerHTML = `<span><i class="fa-solid fa-x"></i> <i class="fa-solid fa-o"></i> </span>Game`;
    for(let i=1; i<10; i++){
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.background = 'white'
    }

    if (flag) {
        onePerson.style.display = 'block';
        twoPerson.style.display = 'none';
    } else {
        twoPerson.style.display = 'block';
        onePerson.style.display = 'none';
    }
}

function implementOnePerson(id) {
    let clickedIndex = index.indexOf(parseInt(id));
    if (clickedIndex !== -1) {
        index.splice(clickedIndex, 1);  
    }

    let randomId = getRandomIndexExcept(id);
    if (randomId !== null) {
        document.getElementById(randomId).innerHTML = '<i class="fa-solid fa-o"></i>';
        winner();  
    }
}


let index = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandomIndexExcept() {
    if (index.length === 0) return null; 
    let randomIndex;
    
    while (index.length > 1) {
        randomIndex = Math.floor(Math.random() * index.length);
        let id = index[randomIndex];

        
        if (document.getElementById(id).innerHTML === "") {
            index.splice(randomIndex, 1); 
            return id;
        }        
    }
    return index[0];
}





let title = document.querySelector('.title');
let turn ='x';
let squares = [];


function game(id){
    
    let element = document.getElementById(id);

    if(turn === 'x' && element.innerHTML==""){
        element.innerHTML = '<i class="fa-solid fa-x"></i>';
        if(flag && index.length > 1) {
            winner();
            implementOnePerson(id);
        }
        else turn = 'o';
    }
    else if(turn ==='o' && element.innerHTML==""){
        element.innerHTML='<i class="fa-solid fa-o"></i>';
        turn='x';
    }
    winner();
}

function winner(){
    for(let i=1; i<10; i++){
        squares[i] = document.getElementById(i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        end(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != ''){
        end(4,5,6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != ''){
        end(7,8,9);
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != ''){
        end(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != ''){
        end(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != ''){
        end(3,6,9);
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != ''){
        end(1,5,9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != ''){
        end(3,5,7);
    }
}

function end(n1,n2,n3){
    
    title.innerHTML = `<span style="color: rgb(25, 245, 25)">${squares[n1]}</span>  is the winner!`;

    document.getElementById(n1).style.background ='rgb(25, 245, 25)';
    document.getElementById(n2).style.background ='rgb(25, 245, 25)';
    document.getElementById(n3).style.background ='rgb(25, 245, 25)';
}

