function cadastro() {

    const nome = document.getElementById('input_nome').value;
    const email = document.getElementById('cadastro_input_email').value;
    const senha = document.getElementById('cadastro_input_senha').value;
    const confirmSenha = document.getElementById('confirmacaoSenha').value;

    let regexMaiuscula = /[A-Z]/;
    let regexMinuscula = /[a-z]/;

    let senhaValida = false;
    let confirmSenhaValida = false;
    let nomeValido = false;

    let mensagemErroNome = 'O nome deve conter pelo menos um caracter.';

    let mensagemSenhaCurta = 'A senha deve conter pelo menos 6 caracteres';
     
    let mensagemSenhaInvalida = `A senha deve conter pelo menos uma letra maiúscula, 
    além de uma minúscula, um caracter numérico e pelo menos um caracter especial <br> (@, #, %, *, ?, $, &, !, -, /).`;

    let mensagemErroConfirmSenha = 'As senhas devem ser iguas.';


    /* ------------------- VERIFICAÇÃO DE NOME ------------------ */

        if (nome.length > 0) {

            nomeValido = true;

        }

        if (!nomeValido) {

            document.getElementById('nomeErro').innerHTML = mensagemErroNome;

        } else if (nomeValido) {

            document.getElementById('nomeErro').innerHTML = '';

        }
/* ------------------ VERIFICAÇÃO DE SENHA ----------------------- */

    if (regexMaiuscula.test(senha) && regexMinuscula.test(senha) && senha.length >= 6) {

        senhaValida = true;

    } 

    for (let contador = 0; contador <= 9; contador ++) {

        if (senha.indexOf(`${contador}`) > -1) {

            senhaValida = true;

        } 

    }   
    
    if (senha.length < 6) {
        
        document.getElementById('cadastroSenhaErro').innerHTML = mensagemSenhaCurta;

    } else {
    
        document.getElementById('cadastroSenhaErro').innerHTML = '';

    }

    
    if (!senhaValida && senha.length >= 6) {

        document.getElementById('cadastroSenhaErro').innerHTML = mensagemSenhaInvalida;

    } else if(senhaValida && senha.length >= 6) {

        document.getElementById('cadastroSenhaErro').innerHTML = '';

    }

    if (confirmSenha != senha) {
    
        document.getElementById('cadastroConfirmSenhaErro').innerHTML = mensagemErroConfirmSenha;

    } else {

        confirmSenhaValida = true;
        document.getElementById('cadastroConfirmSenhaErro').innerHTML = '';

    }

    /* ------------------------------ CONFIRMAÇÃO DE EMAIL ------------------------------- */
    
    let emailValido = false;
    
    let mensagemEmailInvalido = 'Insira um email válido. Ex: windas@gmail.com';

    if (email.endsWith('@gmail.com') || email.endsWith('@hotmail.com') || email.endsWith('@sptech.school')) {

        emailValido = true;

    }

    if (!emailValido) {

        document.getElementById('cadastroEmailErro').innerHTML = mensagemEmailInvalido;
        
    } else if (emailValido) {

        document.getElementById('cadastroEmailErro').innerHTML = '';

    }

    if (nomeValido && emailValido && senhaValida && confirmSenhaValida) {

        document.getElementById('cadastroSucesso').style.display = 'flex';
        document.getElementById('cadastroSucesso').style.animation = 'cadastroComSucesso';
        document.getElementById('cadastroSucesso').style.animationDuration = '5s';

        setTimeout(() =>  document.getElementById('cadastroSucesso').style.display = 'none', 4900);

    }

}

function habilitarCadastro() {

    document.getElementById('imagem_cama').style.animation = "imgAnim";
    document.getElementById('imagem_cama').style.animationDuration = '2s';
    document.getElementById('imagem_cama').style.left = '-.375rem';
    
    document.getElementById('container_login').style.animation = "fadeOut";
    document.getElementById('container_login').style.animationDuration = '1s';
    setTimeout(() => document.getElementById('container_login').style.display = 'none',800);
    
    setTimeout(() => document.getElementById('container_cadastro').style.display = 'flex',800);
    document.getElementById('container_cadastro').style.animation = "fadeIn";
    document.getElementById('container_cadastro').style.animationDuration = '1s';

}

function habilitarLogin() {

    document.getElementById('imagem_cama').style.animation = "imgAnim2";
    document.getElementById('imagem_cama').style.animationDuration = '2s';
    document.getElementById('imagem_cama').style.left = '50%';
    
    document.getElementById('container_login').style.animation = "fadeIn";
    document.getElementById('container_login').style.animationDuration = '1s';
    setTimeout(() => document.getElementById('container_login').style.display = 'flex',800);
    
    setTimeout(() => document.getElementById('container_cadastro').style.display = 'none',800);
    document.getElementById('container_cadastro').style.animation = "fadeOut";
    document.getElementById('container_cadastro').style.animationDuration = '1s';

}