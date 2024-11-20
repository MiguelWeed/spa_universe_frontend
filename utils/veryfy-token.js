export async function veryfyToken(url) {
    const token = localStorage.getItem("token")

    if(!token){
        window.location.href = url // mudar para quando for para o projeto original 
        return
    }

    //verificar se o token e valido
    const response = await fetch("http://localhost:3000/verify", {
        headers: {//pedi para o marcio explicar 
            "Authorization": token
        }
    }).then(response => response.json())

    if(!response.ok) {
        alert(response.message)

        window.location.href = url // mudar essa parte quando for passar para o original
    }
}

veryfyToken()