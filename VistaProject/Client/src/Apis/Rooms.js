import axiosSecure from "."

// get all room apis
export const getAllRooms = async () => {
    const {data} = await axiosSecure('/rooms')
    return data

}

// get single room api
export const getSingleRoom = async (id) => {
    const {data} = await axiosSecure(`/rooms/${id}`)
    return data
}