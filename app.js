function calcular (tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor 
        }

        if(valor === "=") {

            function typeWriter (elemento) {

            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
                setTimeout(function() {
                    document.getElementById('resultado').value += letra;
                }, 100 * i)
             });

             console.log(document.getElementById('resultado').value)
             
            }

            const mensagem1 = document.querySelector('h1');
            typeWriter(mensagem1)

         if (document.getElementById('resultado').value === (valorNumerico + ' // Oi, tudo bem!?')) {

            document.getElementById('resultado').value = '';

            function typeWriter2 (elemento) {
                const textoArray = elemento.innerHTML.split('');
                elemento.innerHTML = '';
                textoArray.forEach((letra, i) => {
                    setTimeout(function() {
                        document.getElementById('resultado').value += letra;
                    }, 100 * i)
                });
            }

            const mensagem2 = document.querySelector('h2');
            typeWriter2(mensagem2)

        }

        if(document.getElementById('resultado').value === "Estou a procura de") {
                        
            document.getElementById('resultado').value = '';

            function typeWriter3 (elemento) {
                const textoArray = elemento.innerHTML.split('');
                elemento.innerHTML = '';
                textoArray.forEach((letra, i) => {
                    setTimeout(function() {
                            document.getElementById('resultado').value += letra;
                        }, 100 * i)
                     });
                 }

                const mensagem3 = document.querySelector('h3');
                typeWriter3(mensagem3)

                }
        
        if(document.getElementById('resultado').value === "uma vaga de estágio!") {
                        
            document.getElementById('resultado').value = '';
            
            function typeWriter4 (elemento) {
                    const textoArray = elemento.innerHTML.split('');
                    elemento.innerHTML = '';
                    textoArray.forEach((letra, i) => {
                        setTimeout(function() {
                                document.getElementById('resultado').value += letra;
                                }, 100 * i)
                                });
                    }
            
                    const mensagem4 = document.querySelector('h4');
                    typeWriter4(mensagem4)
    
             }
             
        if(document.getElementById('resultado').value === "Se quiser me ajudar") {
                        
                document.getElementById('resultado').value = '';
                        
                    function typeWriter5 (elemento) {
                            const textoArray = elemento.innerHTML.split('');
                            elemento.innerHTML = '';
                            textoArray.forEach((letra, i) => {
                                setTimeout(function() {
                                    document.getElementById('resultado').value += letra;
                                        }, 100 * i)
                                        });
                                }
                        
                    const mensagem5 = document.querySelector('h5');
                    typeWriter5(mensagem5)
                
                }

        if(document.getElementById('resultado').value === "interaja no post :D") {
                        
                document.getElementById('resultado').value = '';
                                
                    function typeWriter6 (elemento) {
                            const textoArray = elemento.innerHTML.split('');
                            elemento.innerHTML = '';
                            textoArray.forEach((letra, i) => {
                                setTimeout(function() {
                                    document.getElementById('resultado').value += letra;
                                            }, 100 * i)
                                            });
                                    }
                                
                        const mensagem6 = document.querySelector('h6');
                        typeWriter6(mensagem6)
                        
                }
            
            if (document.getElementById('resultado').value === "Ah! o seu resultado é") {
                resultado = eval(valorNumerico);
                document.getElementById('resultado').value = resultado;
            }
        } 
    } else if(tipo === 'valor') {
  
        valorNumerico = document.getElementById('resultado').value += valor
        console.log(valorNumerico)

    }
}