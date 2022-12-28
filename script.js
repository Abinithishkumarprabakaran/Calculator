// document.querySelector('.calc').addEventListener('keypress', (e) =>{
//     console.log(e);
// })



function calcfunc(e){
    var one_field = document.querySelector('.one-field');

    var data_one_field = one_field.innerText;

    var last_element = data_one_field.slice(-1)[0];
    
    exp_arr = ['+','-','*','/'];

    // if(exp_arr.includes(e.innerText)){
    //     var two_field = document.querySelector('.two-field')
    //     two_field.innerText = data_one_field + e.innerText
    //     one_field.innerText = ''
    // }

    // if(e.innerText == '='){
    //     var two_field = document.querySelector('.two-field');
    //     var data_two_field = two_field.innerText
    //     var operator = data_two_field.slice(-1)
    //     console.log(operator);
    //     var two_exact_data = data_two_field.split(operator)
    //     console.log("two_exact_data",two_exact_data);
    // }
    
    if(!exp_arr.includes(last_element) && (e.innerText !== '=')){
        one_field.innerText = data_one_field + e.innerText;
    }
    else if(!exp_arr.includes(e.innerText) && (e.innerText !== '=')){
        one_field.innerText = data_one_field + e.innerText;
    }
    // // else{
    // //     console.log("Last Element is already an expression");
    // // }
    let output = 0
    if(e.innerText === '='){
        var val = document.querySelector('.one-field');
        var val_data = val.innerText
        output = eval(val_data);

        val.innerText = output;
    }

    // if(exp_arr.includes(e.innerText)){
    //     var two_field = document.querySelector('.two-field')
    //     two_field.innerText = data_one_field + e.innerText;
    //     one_field.innerText = '';
    // }

    // if(e.innerText == '='){
    //     var two_field = document.querySelector('.two-field')
    //     var data_two_field = two_field.innerText
    //     console.log(data_two_field, two_field.innerText)

    //     var operator = data_two_field.slice(-1)
    //     console.log(operator);

    //     var two_exact_data = data_two_field.split(operator)
    //     console.log(two_exact_data);


    // }

}

var key_trigger = document.querySelector('body')

key_trigger.addEventListener('keypress', (e) =>{

    var one_field = document.querySelector('.data');

    if(e.code.includes('Digit') || e.code.includes('Numpad')){
        var data_one_field = one_field.innerText;
    
        var last_element = data_one_field.slice(-1)[0];
        exp_arr = ['+','-','*','/'];
        if(!exp_arr.includes(last_element)){
            one_field.innerText = data_one_field + e.key;
        }
        else if(!exp_arr.includes(e.key)){
            one_field.innerText = data_one_field + e.key;
        }

    }
    let output = 0
    if(e.code==='Enter'){
            var val = document.querySelector('.one-field');
            var val_data = val.innerText
            output = eval(val_data);

            val.innerText = output;
        }
})

function clearfunc(e){
    if(e.innerText == 'C'){
        document.querySelector('.one-field').innerText = '';
    }
}