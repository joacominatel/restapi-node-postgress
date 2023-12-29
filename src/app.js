// Definir la base de la URL para incluir el puerto 4000
const baseURL = 'http://localhost:4000';

// Función para crear un usuario
document.getElementById('createUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    axios.post(`${baseURL}/users`, { name, email })
        .then(response => {
            alert('Usuario creado!');
            console.log(response);
        })
        .catch(error => console.error(error));
});

// Función para obtener todos los usuarios
function getUsers() {
    axios.get(`${baseURL}/users`)
        .then(response => {
            const usersList = document.getElementById('usersList');
            usersList.innerHTML = '';
            response.data.forEach(user => {
                usersList.innerHTML += `<p>ID: ${user.id} - Nombre: ${user.name} - Email: ${user.email}</p>`;
            });
        })
        .catch(error => console.error(error));
}

// Función para actualizar un usuario
document.getElementById('updateUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const email = document.getElementById('updateEmail').value;
    axios.put(`${baseURL}/users/${id}`, { name, email })
        .then(response => {
            alert('Usuario actualizado!');
            console.log(response);
        })
        .catch(error => console.error(error));
});

// Función para eliminar un usuario
document.getElementById('deleteUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('deleteId').value;
    axios.delete(`${baseURL}/users/${id}`)
        .then(response => {
            alert('Usuario eliminado!');
            console.log(response);
        })
        .catch(error => console.error(error));
});