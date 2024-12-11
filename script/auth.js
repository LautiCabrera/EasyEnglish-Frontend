// Decodificar el token JWT
function decodeToken(token) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    console.error("Error al decodificar el token:", e);
    return null;
  }
}

// Verificar si el usuario está logueado
function isLoggedIn() {
  return !!localStorage.getItem("token");
}

// Obtener el rol del usuario
function getUserRole() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const decoded = decodeToken(token);
  return decoded ? decoded.role.toLowerCase() : null;
}

// Cerrar sesión
function logout() {
  localStorage.removeItem("token");
  location.href = "./";
}
