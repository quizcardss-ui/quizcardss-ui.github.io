// Base de datos con LocalStorage
const DB = {
  users: [],

  // Carga usuarios guardados previamente
  loadUsers(){
    const data = localStorage.getItem("quiz_users");
    if(data){
      this.users = JSON.parse(data);
    }
  },

  // Guarda todos los usuarios en LocalStorage
  saveAll(){
    localStorage.setItem("quiz_users", JSON.stringify(this.users));
  },

  // Guarda un usuario nuevo
  saveUser(user){
    this.users.push(user);
    this.saveAll();
  },

  // Busca usuario por correo
  findUser(email){
    return this.users.find(u => u.email === email);
  },

  // Actualiza contraseña de un usuario
  updatePassword(email, newPass){
    const user = this.findUser(email);
    if(user){
      user.password = newPass;
      this.saveAll();
    }
  }
};

// Cargar usuarios al iniciar el proyecto
DB.loadUsers();
