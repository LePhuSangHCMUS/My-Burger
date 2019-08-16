import axios from 'axios'
//Goi ham nay o index de no la duoc set dau tien
 const axiosInstance=axios.create({
    //Set duong dan goc khi goi request khong can them vao nua 
    baseURL:'https://react-my-burger-ab7d9.firebaseio.com/',
    
})
// OR
// axiosInstance.defaults.headers.common['Authorization']='AUTH TOEKN'
// axiosInstance.defaults.headers.post['Content-Type']='application/json'
export default axiosInstance;