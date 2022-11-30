
function validaForm(){
	let validaNom = document.forms["form"]["nomePet"].value;
	let validaTut = document.forms["form"]["nomeTut"].value;
	let validaTel = document.forms["form"]["tel"].value;
	let validaDat = document.forms["form"]["dataConsul"].value;

	if (validaNom == ""){
		alert("O nome do pet deve ser preenchido!");
		return false;
	}
	if (validaTut == ""){
		alert("O nome do tutor deve ser preenchido!");
		return false;
	}
	if (validaTel == ""){
		alert("O tefefone deve ser preenchido!");
		return false;
	}
	if (validaDat == ""){
		alert("A data da consulta deve ser preenchido!");
		return false;
	}

	let inserir = window.document.getElementById("cadastrar");
	inserir.innerHTML = `<p>${Nom}</p>`;
	inserir.innerHTML += `<p>${Tut}</p>`;
	inserir.innerHTML += `<p>${Tel}</p>`;
	inserir.innerHTML += `<p>${Dat}</p>`;
}

