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

// Función para agregar o redirigir usuarios
document.getElementById('formUsuario').addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value.toLowerCase(); // Convertimos a minúsculas para la comparación
  const contrasena = document.getElementById('contrasena').value;

  if (!nombre || !correo || !contrasena) {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Comprobar si estamos editando un usuario o agregando uno nuevo
  const usuarioId = document.getElementById('formUsuario').getAttribute('data-id');
  if (usuarioId) {
    // Editar usuario existente
    db.collection('usuarios').doc(usuarioId).update({
      nombre: nombre,
      correo: correo,
      contrasena: contrasena
    }).then(() => {
      alert('Usuario actualizado con éxito');
      document.getElementById('formUsuario').reset();
      document.getElementById('formUsuario').removeAttribute('data-id');
      mostrarUsuarios();
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

      // Redirigir al usuario después de guardar
      redirigirUsuario(correo);
    }).catch((error) => {
      console.error('Error al registrar el usuario: ', error);
    });
  }
});

// Función para redirigir al usuario según su correo
function redirigirUsuario(correo) {
  if (correo.includes('admin')) {
    window.location.href = '/paginasTalktome/administrador/administradorC.html';
  } else if (correo.includes('docente')) {
    window.location.href = '/paginasTalktome/docente/docenteC.html';
  } else if (correo.includes('alumno')) {
    window.location.href = '/paginasTalktome/alumno/alumnoC.html';
  } else if (correo === 'yoeladmin@talktome.com') {
    window.location.href = '/paginasTalktome/administrador/administradorC.html';
  }
}

// Función para editar un usuario
function editarUsuario(id, nombre, correo, contrasena) {
  document.getElementById('nombre').value = nombre;
  document.getElementById('correo').value = correo;
  document.getElementById('contrasena').value = contrasena;
  document.getElementById('formUsuario').setAttribute('data-id', id);
}

// Llamar a mostrarUsuarios cuando se carga la página (si tienes una función de visualización de usuarios)
mostrarUsuarios();

