
const vendas = [];
let tabela = document.getElementById("tabela");


function preencherVetor() {

    let nome = document.getElementById("quantLivros").value;
    let valor = document.getElementById("totalDoValorLivros").value;
    let media = valor/nome;
    vendas.push({
        nome,
        valor,
        media
    });
    exibirTabela(vendas);
}

//console.log(vendas)

function exibirTabela() {
    let innerTabela = "";
    for (i = 0; i < vendas.length; i++) {
        console.log(vendas[i])
        innerTabela = `
            <tr>
                <td>
                    ${i + 1}
                </td>
                <td>
                    ${vendas[i].nome}
                </td>
                <td>
                    ${vendas[i].valor}
                </td>
                <td>
                   ${vendas[i].media.toFixed(2)}
                </td>
            </tr>
        `;
    }

    tabela.innerHTML += innerTabela;
}

function limpar(){
    nome = [];
    valor = [];
   media = [];
    tabela.innerHTML = `
    <tr>
    <th>ID</th>
    <th>QUANTIDADE DE LIVROS</th>
    <th>VALOR TOTAL DE LIVROS</th>
    <th>MEDIA</th>
</tr>
    `
    vendas = [];
}

function excluirDado() {
    vendas.pop();
    tabela.innerHTML = `
    <tr>
    <th>ID</th>
    <th>QUANTIDADE DE LIVROS</th>
    <th>VALOR TOTAL DE LIVROS</th>
    <th>MEDIA</th>
</tr>
    `
    
    for (i = 0; i < vendas.length; i++) {
        console.log(vendas[i])
        innerTabela = `
        <tr>
        <td>
            ${i + 1}
        </td>
        <td>
            ${vendas[i].nome}
        </td>
        <td>
            ${vendas[i].valor}
        </td>
        <td>
           ${vendas[i].media.toFixed(2)}
        </td>
    </tr>
        `;
    }
    exibirTabela();
}