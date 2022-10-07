import apiClient from "@/services/AxiosClient.js"

export default {
    getTodos(){
        return apiClient.get('/todo/inquiry')
        }
}
