var listaNomes = [];

function btnCadastrar() {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();

  var validacao = validarFormulario(firstName, lastName);
  if (!validacao) {
    alert("Informe os dados para continuar");
    return;
  }
  let pessoaObjeto = { firstName, lastName };
  listaNomes.push(pessoaObjeto);
  AdicionarNomesElementoHtml(pessoaObjeto);
}

function AdicionarNomesElementoHtml(pessoaObjeto) {
  //2 exemplo
  var elementoHtml = document.getElementById("lista-nomes");

  var novoCodigoHtml = ` 
  <li class="mt-3 list-group-item">
  <button onclick='ExcluirElemento(this)' class='btn btn-danger'>
    <i class="fa fa-times" aria-hidden="true"></i>
   </button>
  ${pessoaObjeto.firstName} ${pessoaObjeto.lastName}
  </li>`;

  elementoHtml.insertAdjacentHTML("beforeend", novoCodigoHtml);
}

function ExcluirElemento(element) {
  element.parentNode.remove();
}
function eventEscrever(event) {
  //console.log(event.key);
}

function carregarPagina() {
  console.log("a página foi carregada");
}

function validarFormulario(firstName, lastName) {
  if (!firstName || !lastName) {
    return false;
  }
  return true;
}
