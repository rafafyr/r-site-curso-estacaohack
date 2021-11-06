// Aguarda o DOM estar pronto para executar os scripts
$(document).ready(function(){

  $('#loginAluno').submit(function( evento ){
    var usuario = $('#inputUsuario').val()
    var senha = $('#inputSenha').val()

    // comparar o usuario e a senha com os valores fixados no sistema
    // usuario = root
    // senha = cellep1234

    if(usuario == 'root' && senha == 'cellep1234'){
      $('#mensagem').addClass('alert alert-success alert-dismissible fade show')
      $('#mensagem').removeClass('alert-warning')

      $('#mensagem').text('Usuário Logado!').show().fadeOut(3000)
    } else {
      $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
      $('#mensagem').removeClass('alert-success')
      $('#mensagem').text('Usuário ou senha inválidos!').show().fadeOut(3000)
      // bloqueia o evento de submit
      evento.preventDefault()
    }
  })
})