const readLine = require('node:readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (question) => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
};

async function receberEmail() {
    let email = await prompt ("Qual é o seu melhor e-mail para cadastro?\n");
    let confirmarEmail= await prompt("Digite novamente seu e-mail para confirmação!\n");

    if (email === confirmarEmail) {
        return email;
    } else {
        console.log("Emails diferentes, tente novamente");
        return receberEmail();
    }
}
async function receberSenha(){
    let senha = await prompt ("Qual é a sua senha?\n");
    let confirmarSenha= await prompt ("Digite novamente sua senha confirmação!\n");

    return (senha === confirmarSenha) ? senha : receberSenha();
}


const usuarios = []
async function main() {
    while(true == true) { // sempre vai ser verdade
        console.log("Cadastro de novo usuário");
        const usuario = {};
        usuario.nome = await prompt("Qual o seu nome?\n");
        usuario.cpf = await prompt("Qual o seu CPF?\n");
        usuario.dataDeNascimento = await prompt("Qual é a sua data de nascimento?\n");
        usuario.cep = await prompt("Qual é o seu CEP?\n");
        usuario.celular = await prompt("Qual é o número de seu celular?\n");

        usuario.email = await receberEmail();
        usuario.senha = await receberSenha();
        
        usuarios.push(usuario);

        console.log("Novo usuário criado com sucesso", usuario);
        console.log("Lista de usuários atualizada: ", usuarios);
    }
}

main()

