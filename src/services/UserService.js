import apiClient from '../api/api'

const getUserDetail = async (userId) => {
  try {
    const response = await apiClient.get(`/user/${userId}`)
    return response.data // Trả về dữ liệu người dùng
  } catch (error) {
    console.error('Lỗi khi lấy thông tin người dùng:', error)
    throw error // Ném lỗi để xử lý ở nơi gọi
  }
}

export default {
  getUserDetail
}