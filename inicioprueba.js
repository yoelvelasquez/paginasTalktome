// Firebase Configuration
const firebaseConfig = {
    apiKey: "tu-api-key",
    authDomain: "tu-auth-domain",
    projectId: "tu-project-id",
    storageBucket: "tu-storage-bucket",
    messagingSenderId: "tu-messaging-id",
    appId: "tu-app-id",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Función para agregar o editar usuarios
document.getElementById('formUsuario').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    if (!nombre || !correo || !contrasena) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const usuarioId = document.getElementById('formUsuario').getAttribute('data-id');
    if (usuarioId) {
        // Editar usuario
        db.collection('usuarios').doc(usuarioId).update({
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        }).then(() => {
            alert('Usuario actualizado con éxito');
            document.getElementById('formUsuario').reset();
            document.getElementById('formUsuario').removeAttribute('data-id');
        }).catch((error) => {
            console.error('Error al actualizar el usuario: ', error);
        });
    } else {
        // Agregar nuevo usuario
        db.collection('usuarios').add({
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        }).then(() => {
            alert('Usuario registrado con éxito');
            document.getElementById('formUsuario').reset();
        }).catch((error) => {
            console.error('Error al registrar el usuario: ', error);
        });
    }
});




  
