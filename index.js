document.addEventListener('DOMContentLoaded', () => {
    const alerta = document.getElementById('alerta');
    alerta.classList.add('show'); 

 
    window.cerrarAlerta = function() {
        alerta.style.transform = 'translateX(-50%) translateY(100%)'; 
        setTimeout(() => {
            alerta.classList.remove('show');
        }, 500); 
    }
});
