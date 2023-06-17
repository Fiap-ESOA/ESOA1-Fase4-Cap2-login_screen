document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const senhaInput = document.getElementById('senha');
    const confSenhaInput = document.getElementById('confsenha');

    const senha = senhaInput.value;
    const confSenha = confSenhaInput.value;

    if (senha !== confSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    } else {
      // Senha válida, pode prosseguir com o registro
      alert('Registro bem-sucedido!');
      form.reset();
    }
  });
});
