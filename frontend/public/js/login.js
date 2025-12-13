document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  try {
    const res = await fetch(`${window.API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email, 
        password: data.password, 
      }),
    });

    const json = await res.json();

    if (!res.ok) {
      alert(json.error);
      return;
    }

    alert("Login exitoso");
    window.location.href = "/profile";
  } catch (err) {
    console.error(err);
    alert("Error de conexión con el servidor");
  }
});

