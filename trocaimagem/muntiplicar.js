document.querySelector('button').onclick = function(){
    let minhaImagem = document.querySelector('img');

     let meuSrc =  minhaImagem.getAttribute('src');
      if(meuSrc === 'imagem/1.jpg'){
        minhaImagem.setAttribute('src', 'imagem/2.jpg');
      
      } else if (meuSrc === 'imagem/2.jpg') {
        minhaImagem.setAttribute('src', 'imagem/3.jpg');
      }
      else {
        minhaImagem.setAttribute('src', 'imagem/1.jpg');
      }
      
}