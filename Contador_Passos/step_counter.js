//SEÇÃO CLASSE
class Person{

    _steps = 0

    constructor(name){
        this._name = name
    }

    takeAStep(){
        this.steps++
    }

    get name (){
        return this._name
    }

    get steps(){
        return this._steps
    }
    set steps (value){
        if(typeof value != 'number'){
            console.error('Steps deve ser um número')
        } else{
            this._steps = value
        }
    }

}

//SEÇÃO PROMPT
let user_name = prompt('Digite o seu nome')

function validateName(){
    if(user_name === null){
        return 'cancelado'
    } else if(user_name.trim() === ''){
        return 'vazio'
    } else{
        return 'completo'
    }
}

const validate = validateName()

function messageToUser(){
    if(validate === 'cancelado'){
        alert('Operação Cancelada')
    } else if(validate === 'vazio'){
        alert('Nome da pessoa faltando')
    } else{
        alert('Operação bem sucedida')
        let pass = document.querySelector('#pass')
        pass.innerHTML = `<p>Contador de passos do <strong>${user_name}</strong></p>`
        
    }
}
messageToUser()
let p1 = new Person(user_name)

//SEÇÃO FUNÇÃO
let b = document.querySelector('button')
b.addEventListener('click', walk)

function walk(){
    if(validate === 'cancelado' || validate === 'vazio'){
        b.removeEventListener('click', andar)
    } else{
        let res = document.querySelector('#res p')
        p1.takeAStep()
        let walking = p1.steps
        res.innerHTML = `Passos: ${walking}`
}
    
}

        

