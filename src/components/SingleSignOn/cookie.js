"use client"

const getCookie = (cname) => {
  let name = `${cname}=`
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

const getAccessTokenFromCookie = () => {
  const access_token = getCookie("access_token")
  return access_token
}

const removeCookies = () => {
  if (typeof document !== "undefined") {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }
}

export const getFromCookies = {
  accessToken: getAccessTokenFromCookie,
  removeCookies,
}
