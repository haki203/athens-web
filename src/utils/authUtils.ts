const checkToken = () => {

    const storedData = localStorage.getItem('access_token');
    console.log("dang kiem tra token-------------");

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        const currentTime = new Date().getTime();

        if (currentTime < parsedData.expirationTime) {
            // Dữ liệu còn hiệu lực, trả về dữ liệu
            console.log("kiem tra thanh cong, token la: ", parsedData.data);
            return true;

        } else {
            // Dữ liệu đã hết hạn, xóa dữ liệu và trả về null
            localStorage.removeItem('access_token');
            return false;
        }
    }
    return false;
};
export default checkToken;