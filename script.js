import { veryfyToken } from "utils/veryfy-token.js"
import { getName } from "utils/get-name.js"
import { logout } from "utils/logout.js"

const url = "pages/login/login.html"

veryfyToken(url)
getName()
logout()