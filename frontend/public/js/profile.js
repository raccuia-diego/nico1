// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const res = await fetch("http://localhost:3000/auth/me");
        
//         if (!res.ok) {
//             console.log("No hay usuario logueado");
//             return;
//         }

//         const user = await res.json();

//         document.getElementById("username").textContent = user.username;
//         document.getElementById("email").textContent = user.email;

//     } catch (err) {
//         console.error("Error cargando perfil:", err);
//     }
// });

