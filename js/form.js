const form = document.querySelector('.form-grid');
         form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Formulário enviado com sucesso!');
            form.reset();
         });