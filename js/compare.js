const carros = {
    carro_cabine: {
        nome: "Cabine Simples 2.2 Diesel",
        motor: "2.2 Diesel",
        preco: "R$183.850",
        imagem: "imagens ford/XL Cabine.jpg",
        alturaCacamba: "511",
        alturaVeiculo: "1.821",
        alturaSolo: "232",
        capacidadeCarga: "1.234 kg",
        potencia: "160",
        volumeCacamba: "1.420",       
        roda: "aço estampada 16",
    },

    carro_diesel: {
        nome: "XLS 2.2 Diesel",
        motor: "2.2 Diesel",
        preco: "R$220.690",
        imagem: "imagens ford/xls 2.2 diesel.jpg",
        alturaCacamba: "511",
        alturaVeiculo: "1.821",
        alturaSolo: "232",
        capacidadeCarga: "1.076 kg",
        potencia: "160",
        volumeCacamba: "1.180",
        roda: "aço estampada 16",
    },

    carro_storm: {
        nome: "Storm 3.2 Diesel",
        motor: "3.2 Diesel",
        preco: "R$222.790",
        imagem: "imagens ford/storm.jpg",
        alturaCacamba: "511",
        alturaVeiculo: "1.821",
        alturaSolo: "232",
        capacidadeCarga: "1.040 kg",
        potencia: "200",
        volumeCacamba: "1.180",
        roda: "liga leve 17",
    }
};

const botao = document.getElementById("comparar");
const modal = document.getElementById("modalComparacao");
const fechar = document.querySelector(".fechar");

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
    <table border="1" cellpadding="10" cellspacing="0" scroll="yes">
    <tr>
        <th>Imagem</th>
        <th><img src="${selecionados[0].imagem}" alt="${selecionados[0].nome} - Ford truck front view" width="100"></th>
        <th><img src="${selecionados[1].imagem}" alt="${selecionados[1].nome} - Ford truck front view" width="100"></th>
    </tr>
        <tr>
            <th>Modelo</th>
            <th>${selecionados[0].nome}</th>
            <th>${selecionados[1].nome}</th>
        </tr>

        <tr>
        <tr>
            <td>Altura da Caçamba</td>
            <td>${selecionados[0].alturaCacamba}</td>
            <td>${selecionados[1].alturaCacamba}</td>
        </tr>
             <td>Motor</td>
            <td>${selecionados[0].motor}</td>
            <td>${selecionados[1].motor}</td>
        </tr>
        <tr>
            <td>Altura do Veículo</td>
            <td>${selecionados[0].alturaVeiculo}</td>
            <td>${selecionados[1].alturaVeiculo}</td>
        </tr>
        <tr>
            <td>Altura do Solo</td>
            <td>${selecionados[0].alturaSolo}</td>
            <td>${selecionados[1].alturaSolo}</td>
        </tr>
        <tr>
            <td>Capacidade de Carga</td>
            <td>${selecionados[0].capacidadeCarga}</td>
            <td>${selecionados[1].capacidadeCarga}</td>
        </tr>
        <tr>
            <td>Potência</td>
            <td>${selecionados[0].potencia}</td>
            <td>${selecionados[1].potencia}</td>
            </tr>
        <tr>
            <td>Volume da Caçamba</td>
            <td>${selecionados[0].volumeCacamba}</td>
                <td>${selecionados[1].volumeCacamba}</td>
        </tr>

        <tr>
            <td>Roda</td>
            <td>${selecionados[0].roda}</td>
            <td>${selecionados[1].roda}</td>
        </tr>
        <td>Preço</td>
        <td>${selecionados[0].preco}</td>
        <td>${selecionados[1].preco}</td>
    </table>
    
    `;
    modal.style.display = "flex";
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});