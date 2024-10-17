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

// Función para mostrar los usuarios en la tabla
function mostrarUsuarios() {
    const tablaUsuarios = document.getElementById('tbodyUsuarios');
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
    });
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    db.collection('usuarios').doc(id).delete().then(() => {
        alert('Usuario eliminado');
        mostrarUsuarios(); // Actualizar la lista después de eliminar
    }).catch((error) => {
        console.error('Error al eliminar el usuario: ', error);
    });
}

// Función para editar un usuario
function editarUsuario(id, nombre, correo, contrasena) {
    // Redirigir o cargar los valores actuales en algún formulario de edición
    // Aquí podrías redirigir al formulario con los valores pre-cargados para editar
    alert(`Editar usuario: ${nombre}, Correo: ${correo}`);
}

// Mostrar los usuarios cuando se cargue la página
document.addEventListener('DOMContentLoaded', mostrarUsuarios);
