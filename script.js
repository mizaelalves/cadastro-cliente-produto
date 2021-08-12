var dadosClientes = JSON.parse(localStorage.getItem("dadosCliente"));
var dadosProdutos = JSON.parse(localStorage.getItem("dadosProdutos"));

function resetInput() {
  var a = document.getElementById("pId");
  var b = document.getElementById("pNome");
  var c = document.getElementById("pQuantidade");
  var d = document.getElementById("pDataFabricacao");
  var e = document.getElementById("pDataValidade");
  var f = document.getElementById("pCodigoBarras");
  var g = document.getElementById("pPeso");
  var h = document.getElementById("pFornecedor");

  a.value = "";
  b.value = "";
  c.value = "";
  d.value = "";
  e.value = "";
  f.value = "";
  g.value = "";
  h.value = "";

  var a = document.getElementById("cId");
  var b = document.getElementById("cNome");
  var c = document.getElementById("cDataNascimento");
  var d = document.getElementById("cCpf");
  var e = document.getElementById("cCep");
  var f = document.getElementById("cCidade");
  var g = document.getElementById("cUf");
  var h = document.getElementById("cBairro");
  var i = document.getElementById("cRua");
  var j = document.getElementById("cNumero");

  a.value = "";
  b.value = "";
  c.value = "";
  d.value = "";
  e.value = "";
  f.value = "";
  g.value = "";
  h.value = "";
  i.value = "";
  j.value = "";
}

function cadCliente(id, name, date, cpf, cep, city, uf, bairro, rua, number) {
  if (dadosClientes == null) {
    localStorage.setItem("dadosCliente", "[]");
    dadosClientes = [];
  }

  if (
    id == "" ||
    name == "" ||
    cpf == "" ||
    cep == "" ||
    city == "" ||
    uf == "" ||
    bairro == "" ||
    rua == "" ||
    number == ""
  ) {
    alert("Preencha o campo");
  } else
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
    if(auxRegistro != null){
  dadosClientes.push(auxRegistro);

  localStorage.setItem("dadosCliente", JSON.stringify(dadosClientes));
  console.log("Cliente " + auxRegistro.nome + " cadastrado");

  alert("Cliente " + auxRegistro.nome + " cadastrado");
  }
  clientes();
  resetInput();
}

function clientes() {
  getDataClientes();

  var tbl = document.getElementById("table-client");

  var x = tbl.rows.length;
  while (--x) {
    tbl.deleteRow(x);
  }

  var qtdLinhas = tbl.rows.length;
  console.log(dadosClientes);
  for (i = 0; i < dadosClientes.length; i++) {
    var content = tbl.insertRow(qtdLinhas);

    var cellId = content.insertCell(0);
    var cellName = content.insertCell(1);
    var cellDate = content.insertCell(2);
    var cellCpf = content.insertCell(3);
    var cellCep = content.insertCell(4);
    var cellCity = content.insertCell(5);
    var cellUf = content.insertCell(6);
    var cellBairro = content.insertCell(7);
    var cellRua = content.insertCell(8);
    var cellNumber = content.insertCell(9);

    cellId.innerHTML = dadosClientes[i].id;
    cellName.innerHTML = dadosClientes[i].nome;
    cellDate.innerHTML = dadosClientes[i].data_nascimento;
    cellCpf.innerHTML = dadosClientes[i].cpf;
    cellCep.innerHTML = dadosClientes[i].cep;
    cellCity.innerHTML = dadosClientes[i].city;
    cellUf.innerHTML = dadosClientes[i].uf;
    cellBairro.innerHTML = dadosClientes[i].bairro;
    cellRua.innerHTML = dadosClientes[i].rua;
    cellNumber.innerHTML = dadosClientes[i].number;
  }
}

function getDataClientes() {
  var str = localStorage.getItem("dadosClient");
  if (str != null) dadosClientes = JSON.parse(str);
}

//produtos-------------------------------------------------------------
console.log(dadosProdutos);

function cadProduto(
  id,
  name,
  quantidade,
  dataFabricacao,
  dataValidade,
  codigoBarras,
  peso,
  fornecedor
) {
  if (dadosProdutos == null) {
    localStorage.setItem("dadosProdutos", "[]");
    dadosProdutos = [];
  }

  if (
    id == "" ||
    name == "" ||
    quantidade == "" ||
    dataFabricacao == "" ||
    dataValidade == "" ||
    codigoBarras == "" ||
    peso == "" ||
    fornecedor == ""
  ) {
    alert("Preencha o campo");
  } else
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
  if(auxRegistro != null){
  localStorage.setItem("dadosProdutos", JSON.stringify(dadosProdutos));
  console.log("Produto " + auxRegistro.nome + " cadastrado");

  alert("produto " + auxRegistro.nome + " cadastrado");
  }
  produtos();
  resetInput();
}

function produtos() {
  getDataProdutos();

  var tbl = document.getElementById("table-products");

  var x = tbl.rows.length;
  while (--x) {
    tbl.deleteRow(x);
  }

  var qtdLinhas = tbl.rows.length;

  for (i = 0; i < dadosProdutos.length; i++) {
    var content = tbl.insertRow(qtdLinhas);

    var cellId = content.insertCell(0);
    var cellName = content.insertCell(1);
    var cellQuantidade = content.insertCell(2);
    var cellDataFabricacao = content.insertCell(3);
    var cellDataValidade = content.insertCell(4);
    var cellCodigoBarras = content.insertCell(5);
    var cellPeso = content.insertCell(6);
    var cellFornecedor = content.insertCell(7);

    cellId.innerHTML = dadosProdutos[i].id;
    cellName.innerHTML = dadosProdutos[i].nome;
    cellQuantidade.innerHTML = dadosProdutos[i].quantidade;
    cellDataFabricacao.innerHTML = dadosProdutos[i].data_fabricacao;
    cellDataValidade.innerHTML = dadosProdutos[i].data_validade;
    cellCodigoBarras.innerHTML = dadosProdutos[i].codigoBarras;
    cellPeso.innerHTML = dadosProdutos[i].peso;
    cellFornecedor.innerHTML = dadosProdutos[i].fornecedor;
  }
}

function getDataProdutos() {
  var str = localStorage.getItem("dadosProdutos");
  if (str != null) dadosProdutos = JSON.parse(str);
}

//--------------------------------------------------------------

//hidden
function showClient() {
  document.getElementById("client").style.display = "flex";
  document.getElementById("client").style.position = "relative";

  document.getElementById("products").style.display = "none";
  document.getElementById("products").style.position = "absolute";

  document.getElementById("btn-client").style.color = "#040611";
  document.getElementById("btn-products").style.color = "white";

  document.getElementById("btn-client").style.background = "#CEC5DB";
  document.getElementById("btn-products").style.background = "#040611";
  document.getElementById("footer").style.position = "relative";
}

function showProduct() {
  document.getElementById("products").style.display = "flex";
  document.getElementById("products").style.position = "relative";

  document.getElementById("client").style.display = "none";
  document.getElementById("client").style.position = "absolute";

  document.getElementById("btn-products").style.color = "#040611";
  document.getElementById("btn-client").style.color = "white";

  document.getElementById("btn-products").style.background = "#CEC5DB";
  document.getElementById("btn-client").style.background = "#040611";
  document.getElementById("footer").style.position = "relative";
}
document.getElementById("date").innerHTML = new Date().getFullYear();
