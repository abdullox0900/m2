import axios from 'axios'
import {
    useRuntimeConfig
} from 'nuxt/app'

export function getApi() {
    const config = useRuntimeConfig()
    return axios.create({
        baseURL: config.public.apiBase || 'http://localhost:3000',
    })
}