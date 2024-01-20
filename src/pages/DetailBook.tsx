import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Button, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";
import axios from 'axios';
import { Book } from 'models/Book';
function DetailBook() {
    const { pathname } = useLocation();
    const { id } = useParams();
    const [book, setBook] = React.useState<Book[]>([]);

    useEffect(() => {
        const getDetail = async () => {
            axios.get('https://thonguyen.onrender.com/api/product/'+id)
                .then(response => {
                    // Xử lý dữ liệu khi nhận được từ API
                    setBook(response.data.product);
                    console.log(response.data.product.title);

                })
                .catch(error => {
                    // Xử lý lỗi nếu có
                    console.error('Error fetching data:', error);
                });
        }
        getDetail();
    },[])
    return (
        <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
            <ShopDetailItemSidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <Line className="bg-indigo-50 h-[1542px] md:h-px md:w-full w-px" />
            <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
                <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />

                <div className="flex flex-col font-poppins items-start justify-start sm:pl-5 pl-6 w-full">

                    <div className="flex flex-row sm:gap-10 items-center justify-between sm:pr-5 pr-6 w-full">
                        <Text
                            className="text-bluegray-900 text-left text-xl w-auto"
                            size="txtPoppinsMedium20"
                        >
                            All Book
                        </Text>
                        <div className="flex flex-row font-inter gap-3 items-center justify-end w-[180px]">


                            <Button
                                style={{ alignSelf: 'end' }}
                                className="bg-deep_orange-300 cursor-pointer flex items-center justify-center py-4 rounded w-full"
                                rightIcon={
                                    <Img
                                        className="ml-[20px]"
                                        src="../public/images/img_plus_white_a700.svg"
                                        alt="plus"
                                    />
                                }
                            >
                                <div className="font-medium text-center text-sm text-white-A700">
                                    Add Book
                                </div>
                            </Button>
                        </div>

                    </div>
                </div>
                                <div>
                                </div>
            </div>
        </div>
    )
}

export default DetailBook