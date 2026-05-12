// envio do formulário e funcionalidade do botão enviar -----------------------------------
const form = document.querySelector('.form-grid');
         form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Formulário enviado com sucesso!');
            form.reset();
         });