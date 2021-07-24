<h1 align="center">🎐Register Client and Product</h1>
<br>
<p align="center">🚀 Challange#2 for Gama Academy </p>


<h4 align="center"> 
  <p>This Project was developed in the Gama Academy Full Stack course</p>
  <a href="https://cadastro-cliente-produto.netlify.app">Click Here to view</a>
  
</h4>

<h4>The criterion to complete the challenge were:</h4>
<p>● Create a page to register customers and products, properly structured</p>
<p>For this i create a form for register the client and products </p>

```bash
<form name="fproducts">
          <h4>Produtos</h4>
          <label>id </label><br />
          <input id="pId" type="text" name="txtId" placeholder="id" required /><br />
          <label>Nome</label><br />
          <input id="pNome" type="text" name="txtNome" placeholder="nome" required /><br />
          <label>Quantidade</label><br />
          <input id="pQuantidade" type="text" name="txtQuantidade" placeholder="Quantidade" required /><br />
          <label>Data de fabricação</label><br />
          <input id="pDataFabricacao" type="text" name="txtDataFabricacao" placeholder="Data de fabricação" required /><br />
          <label>Data de validade</label><br />
          <input id="pDataValidade" type="text" name="txtDataValidade" placeholder="Data de validade" required /><br />
          <label>Codigo de barras</label><br />
          <input id="pCodigoBarras" type="text" name="txtCodigo" placeholder="Codigo de barras" required /><br />
          <label>Peso</label><br />
          <input id="pPeso" type="text" name="txtPeso" placeholder="Peso" required /><br />
          <label>Fornecedor</label><br />
</form>
```
<p>● Add the data registered in localstorage</p>
<p>In js i create the function</p> 

```bash
function cadCliente() and function cadProduto() 
``` 
<p>that, when activated, captures the form's data and adds it to the localstorage in string format</p>


```bash
var auxRegistro = {
      id: id,
      nome: name,
      data_nascimento: date,
      cpf: cpf,
      cep: cep,
      city: city,
      uf: uf,
      bairro: bairro,
      rua: rua,
      number: number,
    };

  dadosClientes.push(auxRegistro);

  localStorage.setItem("dadosCliente", JSON.stringify(dadosClientes));
``` 
```bash
    var auxRegistro = {
      id: id,
      nome: name,
      quantidade: quantidade,
      data_fabricacao: dataFabricacao,
      data_validade: dataValidade,
      codigoBarras: codigoBarras,
      peso: peso,
      fornecedor: fornecedor,
    };

  dadosProdutos.push(auxRegistro);

  localStorage.setItem("dadosProdutos", JSON.stringify(dadosProdutos));

``` 
