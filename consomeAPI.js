function consultarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao consultar o CEP');
        }
        return response.json();
      })
      .then(data => {
        // Manipular os dados recebidos da API
        document.getElementById('resultado').innerHTML = `
          <p>CEP: ${data.cep}</p>
          <p>Logradouro: ${data.logradouro}</p>
          <p>Bairro: ${data.bairro}</p>
          <p>Cidade: ${data.localidade}</p>
          <p>Estado: ${data.uf}</p>
        `;
      })
      .catch(error => {
        document.getElementById('resultado').innerHTML = `<p>Erro na requisição: ${error.message}</p>`;
      });
  }
  
  document.getElementById('consultarButton').addEventListener('click', consultarCEP);
  