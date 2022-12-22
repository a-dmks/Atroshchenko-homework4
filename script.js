const operation = prompt(`Введіть яку операцію хочете зробити
·add  - додавання
·sub  - віднімання
·mult - множення
·div  - ділення`)

const firstNum = +prompt(`Введіть перше число:`)

const secondNum = +prompt(`Введіть друге число:`)

if(isNaN(firstNum) || isNaN(secondNum)){
    alert(`Помилка, неправильно введене число`)
}else{
    switch(operation){
        case 'add' :
            alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
        break;
        case 'sub' :
            alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
        break;
        case 'mult' :
            alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
        break;
        case 'div' :
            alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
        break;
        default:
            alert(`Я не можу порахувати цю операцію(`)
    }
}

// switch(operation){
//     case 'add' :
//         alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
//     break;
//     case 'sub' :
//         alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
//     break;
//     case 'mult' :
//         alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
//     break;
//     case 'div' :
//         alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
//     break;
//     default:
//         alert(`Я не можу порахувати цю операцію(`)
// }