document.addEventListener('DOMContentLoaded', function () {
    const btnCadastro = document.getElementById('btnCadastro');
    const btnContato = document.getElementById('btnContato');
    const btnSaibaMais = document.getElementById('btnSaibaMais');
    const btnRegras = document.getElementById('btnRegras')

    function scrollParaSecao(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
            return true;
        }
        return false;
    }

    if (btnCadastro) {
        btnCadastro.addEventListener('click', function (e) {
            e.preventDefault();
            scrollParaSecao('cadastro');
        });
    }

    if (btnContato) {
        btnContato.addEventListener('click', function (e) {
            e.preventDefault();
            scrollParaSecao('cadastro');
        });
    }

    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', function (e) {
            e.preventDefault();
            scrollParaSecao('saibaMais');
        });
    }

    if (btnComoFunciona) {
        btnComoFunciona.addEventListener('click', function (e) {
            e.preventDefault();
            scrollParaSecao('comoFunciona');
        });
    }

    if (btnRegras) {
        btnRegras.addEventListener('click', function (e) {
            e.preventDefault();
            scrollParaSecao('regras');
        });
    }
});

document.getElementById('formCadastro').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData();

  data.append('entry.1996784540', document.getElementById('nome').value);
  data.append('entry.1577197277', document.getElementById('instagram').value);
  data.append('entry.561781081', document.getElementById('cpf').value);
  data.append('entry.1891232097', document.getElementById('telefone').value);

  fetch('https://docs.google.com/forms/d/e/1FAIpQLSd6bNaLUk8-UNMB_NJ4wcvQk2mOzVBuCRHrH-0WefXHEghtWg/formResponse', {
    method: 'POST',
    body: data,
    mode: 'no-cors'
  });

  alert('Cadastro enviado com sucesso!');
});