import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "905fc03c-4a7d-4b7a-bfe6-f12cd3649814"
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`).then(response => response.data)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(response => response.data)
  }
}