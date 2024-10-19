const firebaseConfig = {
    apiKey: "AIzaSyAjBghlQuGQjedJqrK4Nn1LWj_3Bt0bN8Y",
    authDomain: "talk-to-me-199e1.firebaseapp.com",
    projectId: "talk-to-me-199e1",
    storageBucket: "talk-to-me-199e1.appspot.com",
    messagingSenderId: "1041923849412",
    appId: "1:1041923849412:web:cf75e2488f5bf62fbd9d91",
    measurementId: "G-FQR4K3FHZR"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Función para mostrar los usuarios en la tabla
function mostrarUsuarios() {
    const tablaUsuarios = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];
    tablaUsuarios.innerHTML = ''; // Limpiar tabla antes de mostrar datos

    db.collection('usuarios').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            const usuario = doc.data();
            const fila = `
                <tr>
                    <td>${doc.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.correo}</td>
                    <td><button class="btn btn-danger" onclick="eliminarUsuario('${doc.id}')">Eliminar</button></td>
                    <td><button class="btn btn-warning" onclick="editarUsuario('${doc.id}', '${usuario.nombre}', '${usuario.correo}', '${usuario.contrasena}')">Editar</button></td>
                </tr>
            `;
            tablaUsuarios.innerHTML += fila;
        });
    }).catch((error) => {
        console.error('Error al mostrar los usuarios: ', error);
    });
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    db.collection('usuarios').doc(id).delete().then(() => {
        alert('Usuario eliminado');
        mostrarUsuarios();
    }).catch((error) => {
        console.error('Error al eliminar el usuario: ', error);
    });
}

// Función para editar un usuario
function editarUsuario(id, nombre, correo, contrasena) {
    // Aquí podrías redirigir a un formulario de edición si es necesario
    alert(`Editar usuario:\nNombre: ${nombre}\nCorreo: ${correo}`);
}

// Llamar a mostrarUsuarios cuando se carga la página
mostrarUsuarios();
