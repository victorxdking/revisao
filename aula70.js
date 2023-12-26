/* const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 26;
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
} */




// Factory functions / Constructor funcitons / Classes
/* function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto()); */


// Factory functions / Constructor funcitons / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);