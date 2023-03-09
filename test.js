const req =  {
    body:{
        nome:"Nome",
        genero:"Genero",
        dataDeNascimento:"Data",
        idade:"Idade",
        disciplina:"Matéria",
        nota:"10",
        situacaoFinal:"Aprovado"
    }

}

console.log(JSON.stringify(req.body));