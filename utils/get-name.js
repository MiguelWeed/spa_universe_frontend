export async function getName(){
    const token = localStorage.getItem("token")

    if(!token){
        return
    }

    const response = await fetch("http://localhost:3000/getname",{
        headers:{
            "Authorization": token
        }
    }).then(response => response.json())


    const nomeP = document.querySelector(".user p")
    nomeP.innerHTML = `Usuário: ${response.name}`
}
