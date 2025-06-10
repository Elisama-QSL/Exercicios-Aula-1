<<<<<<< HEAD

function formatarNomeDog(nome) {

    let nomeFormatado = nome.trim().toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());
    return nomeFormatado;
  }
  
  let nomesDogs = [
    "   thor ",
    "nanuke ",
    "   chico ",
    " BANDITE ",
    "   Feroz  "
  ];
  

  nomesDogs.forEach(nomeOriginal => {
    let nomeFormatado = formatarNomeDog(nomeOriginal);
    console.log(`Nome Original: "${nomeOriginal}", Nome Formatado: "${nomeFormatado}"`);
=======

function formatarNomeDog(nome) {

    let nomeFormatado = nome.trim().toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());
    return nomeFormatado;
  }
  
  let nomesDogs = [
    "   thor ",
    "nanuke ",
    "   chico ",
    " BANDITE ",
    "   Feroz  "
  ];
  

  nomesDogs.forEach(nomeOriginal => {
    let nomeFormatado = formatarNomeDog(nomeOriginal);
    console.log(`Nome Original: "${nomeOriginal}", Nome Formatado: "${nomeFormatado}"`);
>>>>>>> 3f8e3a8508dea56c788336be5a9babf3c7b79138
  });