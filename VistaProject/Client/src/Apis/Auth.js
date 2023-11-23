import axiosSecure from "."

// save user
export const saveUser = async user => {
    const currentUser ={
        email: user.email,
        role: 'guest',
        status: 'verified'
    }
    const {data} = axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data
}

// get token from server
export const getToken = async email =>  {
    const {data } = axiosSecure.post(`/jwt`, email)
    return data
}

//  clear cookie
export const clearCookie = async email => {
    const {data} = axiosSecure.get('/logout', email)
    return data
}