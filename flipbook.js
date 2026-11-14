    const flipbook = document.getElementById('flipbook');
    const hojas = document.querySelectorAll('.hoja');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const total = hojas.length;
    let actual = 0; // cuántas hojas están volteadas

    function ordenarCapas() {
        hojas.forEach((h, i) => {
            // volteadas: la última volteada arriba / sin voltear: la primera arriba
            h.style.zIndex = i < actual ? i + 1 : total - i;
        });
    }

    function actualizarBotones() {
        btnPrev.disabled = actual === 0;
        btnNext.textContent = actual === total ? '↺ Volver a empezar' : 'Siguiente →';
    }

    function ir(nuevo) {
        if (nuevo < 0 || nuevo > total || nuevo === actual) return;
        const avanzar = nuevo > actual;
        const desde = Math.min(actual, nuevo);
        const hasta = Math.max(actual, nuevo);

        for (let i = desde; i < hasta; i++) {
            hojas[i].style.zIndex = total + 1;          // la hoja en movimiento va encima
            hojas[i].classList.toggle('volteada', avanzar);
        }
        actual = nuevo;
        actualizarBotones();
        setTimeout(ordenarCapas, 400);                  // reordena a mitad de la animación
    }

    function siguiente() {
        if (actual === total) {
            // Volver a abrir: devuelve las hojas una por una
            for (let k = 0; k < total; k++) {
                setTimeout(() => ir(actual - 1), k * 200);
            }
        } else {
            ir(actual + 1);
        }
    }

    btnNext.addEventListener('click', e => { e.stopPropagation(); siguiente(); });
    btnPrev.addEventListener('click', e => { e.stopPropagation(); ir(actual - 1); });

    // Clic en la página derecha = avanzar, en la izquierda = retroceder
    flipbook.addEventListener('click', e => {
        const lomo = flipbook.getBoundingClientRect().left;
        if (e.clientX > lomo) siguiente(); else ir(actual - 1);
    });

    ordenarCapas();
    actualizarBotones();