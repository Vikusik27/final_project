let form = document.querySelector('form[name="ranodmaizer"]');
let btn = form.querySelector('input[name="generate"]');

btn.onclick = function () {
    let min = form.querySelector('input[name="min"]');
    let max = form.querySelector('input[name="max"]');
    let amount = form.querySelector('input[name="amount"]');
    let result = document.querySelector('.result');

    let uniq = document.querySelector('input[name="uniq"]');

    result.innerText = randomaizer(+min.value, +max.value, +amount.value, uniq.checked);
}

function randomaizer(min, max, amount, uniq) {
    let rand = [];

    if(min > max || min == max || min < 1 || max < 1 || amount < 1) return 'Range value error!';

    if(uniq == true){
        if(amount > max - min) return "Error! Unable to generate value in given range!"
        A: for(let i = 0; i < amount;){
            let number = Math.floor(min + Math.random() * (max - min + 1));

            for(let j = 0; j <= rand.length-1; j++){
                if(rand[j] == number) continue A;
            }
            
            rand.push(number);
            i++;
        }

    }
    else if(uniq == false){
        for(let i = 0; i < amount; i++){
            rand.push(Math.floor(min + Math.random() * (max - min + 1)));
        }
    }

    else return "Error! Try later."

   

    // if(rand == null || rand == '' || isNaN(rand)) return 'Ошибка! Попробуйте позже';
    return rand;
}