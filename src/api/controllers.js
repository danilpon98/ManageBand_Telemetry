import http from '@/libs/axios'

export async function all() {
    let { data } = await http.get('/controllers')
    return data;
}