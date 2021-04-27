(function() {
  function tempoAtual() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    const relogio = document.querySelector('[data-relogio]')

    hora = padronizaTempo(hora);
    minutos = padronizaTempo(minutos);
    segundos = padronizaTempo(segundos);

    const display = relogio.innerHTML = `${hora} : ${minutos} : ${segundos}` ;
    const intervalo = setTimeout(tempoAtual, 1000);
  }

  function padronizaTempo(t){
    if (t < 10){
      return "0" + t;
    }
    else return t;
  }

  function modoFesta() {
    const botao = document.querySelector('[data-botao]');
    const fundo = document.querySelector('[data-fundo]');
    let botaoSwitch = botao.dataset.botao;
    botao.addEventListener('click', () => {
      if(botaoSwitch == 'false'){
        botaoSwitch = 'true';
        fundo.classList.toggle ('ativado', true);
        fundo.classList.toggle('desativado', false);
      }
      else if (botaoSwitch == 'true') {
        botaoSwitch = 'false';
        fundo.classList.toggle ('ativado', false);
        fundo.classList.toggle('desativado', true);
      }
    });
  }

  modoFesta()
  tempoAtual()  
})()
