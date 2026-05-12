const carros = {
    carro_cabine: {
        nome: "Cabine Simples 2.2 Diesel",
        motor: "2.2 Diesel",
        tracao: "4x4",
        cambio: "Manual",
        preco: "R$183.850",
        imagem: "imagens ford/XL Cabine.jpg"
    },

    carro_diesel: {
        nome: "XLS 2.2 Diesel",
        motor: "2.2 Diesel",
        tracao: "4x4",
        cambio: "Automático",
        preco: "R$220.690",
        imagem: "imagens ford/xls 2.2 diesel.jpg"
    },

    carro_storm: {
        nome: "Storm 3.2 Diesel",
        motor: "3.2 Diesel",
        tracao: "4x4",
        cambio: "Automático",
        preco: "R$222.790",
        imagem: "imagens ford/storm.jpg"
    }
};

const botao = document.getElementById("comparar");

botao.addEventListener("click", () => {

    const selecionados = [];
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {

        if (checkbox.checked) {
            selecionados.push(carros[checkbox.id]);
        }

    });

    if (selecionados.length < 2) {
        alert("Selecione pelo menos 2 carros.");
        return;
    }

    const resultado = document.getElementById("resultadoComparacao");

    resultado.innerHTML = `
    
    <table border="1" cellpadding="10" cellspacing="0">
    <tr>
        <th>Imagem</th>
        <th><img src="${selecionados[0].imagem}" alt="${selecionados[0].nome} - Ford truck front view" width="100"></th>
        <th><img src="${selecionados[1].imagem}" alt="${selecionados[1].nome} - Ford truck front view" width="100"></th>
    </tr>
        <tr>
            <th>Informações</th>
            <th>${selecionados[0].nome}</th>
            <th>${selecionados[1].nome}</th>
        </tr>

        <tr>
            <td>Motor</td>
            <td>${selecionados[0].motor}</td>
            <td>${selecionados[1].motor}</td>
        </tr>

        <tr>
            <td>Tração</td>
            <td>${selecionados[0].tracao}</td>
            <td>${selecionados[1].tracao}</td>
        </tr>

        <tr>
            <td>Câmbio</td>
            <td>${selecionados[0].cambio}</td>
            <td>${selecionados[1].cambio}</td>
        </tr>

        <tr>
            <td>Preço</td>
            <td>${selecionados[0].preco}</td>
            <td>${selecionados[1].preco}</td>
        </tr>
    </table>
    
    `;
});