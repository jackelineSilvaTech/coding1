const readLine = require('node:readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const askQuestion = (question) => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
};




async function receberEmail() {
    let email = await askQuestion ("Qual é o seu melhor e-mail para cadastro?\n");
    let confirmarEmail= await askQuestion("Digite novamente seu e-mail para confirmação!\n");

    if (email === confirmarEmail) {
        return email;
    } else {
        console.log("Emails diferentes, tente novamente");
        return receberEmail();
    }
}
async function receberSenha(){
    let senha = await askQuestion ("Qual é a sua senha?\n");
    let confirmarSenha= await askQuestion ("Digite novamente sua senha confirmação!\n");

    receberSenha? senha : confirmarSenha
    
}


const usuarios = []
async function main() {
    while(true == true) { // sempre vai ser verdade
        console.log("Cadastro de novo usuário");
        const usuario = {};
        usuario.nome = await askQuestion("Qual o seu nome?\n");
        usuario.cpf = await askQuestion("Qual o seu CPF?\n");
        usuario.dataDeNascimento = await askQuestion("Qual é a sua data de nascimento?\n");
        usuario.cep = await askQuestion("Qual é o seu CEP?\n");
        usuario.celular = await askQuestion("Qual é o número de seu celular?\n");

        usuario.email = receberEmail();
        usuario.email = receberSenha();
        console.log("Novo usuário", usuario);
    }
}

main()
