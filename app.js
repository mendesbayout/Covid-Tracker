
  /* Programação de eduardo */
  var div1 = document.getElementById('d1'); //mapeia as divs
  var div2 = document.getElementById('d2');
  
  
  function renderCity(){
  
      axios.get('https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&state=RJ') //busca a API
  
  .then(function(response){ // Caso cidade seja encontrada
      console.log(response);
     
         let pos = receiveCity(response);  // Chama função para organizar os dados da API e colocar as cidades em um vetore. Essa função chamará a função de busca da cidade, que retornará a posição da mesma.
  
          div1.innerHTML=(`<p>Casos confirmados em ${response.data.results[pos].city}: ${parseInt(response.data.results[pos].confirmed).toLocaleString('pt-BR')} pessoas.`) // utiliza a posição recebida para referenciar a cidade em [pos].
  
          div1.innerHTML+=(`<p>Mortes confirmadas em ${response.data.results[pos].city}: ${parseInt(response.data.results[pos].deaths)} pessoas.`)    
          
          div2.innerHTML=(`<p>Taxa de ${response.data.results[pos].city}: ${(response.data.results[pos].death_rate).toFixed(4)} Mortes por habitantes..`)
       })
  
  .catch(function(error){ // Caso cidade não seja encontrada
      
      div1.innerHTML=('<p>Cidade não encontrada, favor digitar novamente.</p>')
     
  })
  }
  
  function receiveCity(response){ // Função que organiza os dados recebidos da API.
  
      let cit=[] // vetor onde as cidades ficarão armazenadas.
  
      for(var i=0 ; i<94 ; i++){
          cit[i]=response.data.results[i].city
          }
  
      let pos = findCity(cit); // Chama função para busca da cidade inserida pelo usuário.
  
      return pos; 
        
  }
  
  function findCity(cit){ // Função para busca da cidade inserida pelo usuário.
  
      let inputCity = document.getElementById('txtcity').value; // Recebe entrada do usuário.
      let pos = cit.indexOf(`${inputCity}`); // Busca cidade dentro do vetor
          
      return pos;
  
  }
  
  
  
  
  function openNav() {/* NAVBAR */
      document.getElementById("mySidenav").style.width = "250px";
    }
    
   function closeNav() { /* NAVBAR */
      document.getElementById("mySidenav").style.width = "0";
    }
    
     document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM completamente carregado e analisado");
    });