import instance from "./axiosInstance"
/**
 * 
 * generic axios-methods for being called. <T> represents the full object as response from api while N represents the `Partial` type of T
 * 
 */
export const get = async <T>(endpoint: string) => {
    const res = await instance.get<T>(endpoint);
    return res.data
}

export const post = async <T, N>(endpoint: string, payload: N) => {
    const res = await instance.post<T>(endpoint, payload);
    return res.data
}
export const update = async <T, N>(endpoint: string, payload: N) => {
    const res = await instance.patch<T>(endpoint, payload);
    return res.data
}

export const remove = async <T>(endpoint: string) => {
    const res = await instance.delete<T>(endpoint);
    return res.data
}