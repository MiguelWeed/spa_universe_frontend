import { veryfyToken } from "../../utils/veryfy-token.js"
import { getName } from "../../utils/get-name.js"
import { logout } from "../../utils/logout.js"

const url = "../login/login.html"//lembrar disso na  hora que for passar o codigo 

veryfyToken(url)
getName()
logout()