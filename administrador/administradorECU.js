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

// Función para mostrar los cursos en las tablas
function mostrarCursos() {
    mostrarCursosDocentes();
    mostrarCursosAlumnos();
}

// Función para mostrar cursos de docentes
function mostrarCursosDocentes() {
    const tablaCursosDocentes = document.getElementById('tablaCursosDocentes');
    tablaCursosDocentes.innerHTML = ''; // Limpiar tabla antes de mostrar datos

    db.collection('CURSOS').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            const curso = doc.data();
            const fila = crearFila(doc.id, curso);
            tablaCursosDocentes.innerHTML += fila;
        });
    }).catch((error) => {
        console.error('Error al obtener cursos de docentes: ', error);
    });
}

// Función para mostrar cursos de alumnos
function mostrarCursosAlumnos() {
    const tablaCursosAlumnos = document.getElementById('tablaCursosAlumnos');
    tablaCursosAlumnos.innerHTML = ''; // Limpiar tabla antes de mostrar datos

    db.collection('cursos').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            const curso = doc.data();
            const fila = crearFila(doc.id, curso);
            tablaCursosAlumnos.innerHTML += fila;
        });
    }).catch((error) => {
        console.error('Error al obtener cursos de alumnos: ', error);
    });
}

// Función para crear una fila en la tabla
function crearFila(id, curso) {
    return `
        <tr>
            <td>${id}</td>
            <td>${curso.curso}</td>
            <td>${curso.nivel}</td>
            <td>${curso.duracion}</td>
            <td><button class="btn btn-danger" onclick="eliminarCurso('${id}', 'CURSOS')">Eliminar</button></td>
            <td><button class="btn btn-warning" onclick="editarCurso('${id}', '${curso.curso}', '${curso.nivel}', '${curso.duracion}', 'CURSOS')">Editar</button></td>
        </tr>
    `;
}

// Función para eliminar un curso
function eliminarCurso(id, collection) {
    db.collection(collection).doc(id).delete().then(() => {
        alert('Curso eliminado');
        mostrarCursos(); // Actualizar ambas tablas
    }).catch((error) => {
        console.error('Error al eliminar el curso: ', error);
    });
}

// Función para editar un curso
function editarCurso(id, curso, nivel, duracion, collection) {
    // Cargar los valores actuales en el formulario
    document.getElementById('curso').value = curso;
    document.getElementById('nivel').value = nivel;
    document.getElementById('duracion').value = duracion;

    // Almacenar el ID del curso en el formulario para saber que estamos editando
    document.getElementById('formCurso').setAttribute('data-id', id);
    document.getElementById('formCurso').setAttribute('data-collection', collection); // Almacenar la colección
}

// Llamar a mostrarCursos cuando se carga la página
mostrarCursos();
