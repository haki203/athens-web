import React, { useEffect } from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";
import axios from 'axios';
import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";
import ItemBook from "components/ItemList/ItemBook";
import { Book } from "models/Book";
import { useNavigate } from "react-router-dom";
import TextField from "components/TextField";
import checkToken from "utils/authUtils";
import { useAppContext } from "context/AppContext";

const DashboardTwoPage: React.FC = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState<string>("");
  const [products, setProducts] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const [textSearch, setTextSearch] = React.useState<string>('');
  const searchRef = React.useRef<any>(null);
  const handleSearchText = (value: string) => {
    console.log(value);
    clearTimeout(searchRef.current!);
    searchRef.current = setTimeout(() => {
      setTextSearch(value);
    }, 2000)
    //setTextSearch(value);
  }
  const searchValue = React.useMemo(() => {
    return products.filter(item => item.title?.toUpperCase().indexOf(textSearch.toUpperCase()) !== -1);
  }, [textSearch]);
  const { isLoggedIn, login, logout } = useAppContext();

  useEffect(() => {
    const getBooks = async () => {
        console.log(isLoggedIn);
        
        // Gọi API khi component được render
        axios.get('https://thonguyen.onrender.com/api/product')
          .then(response => {
            // Xử lý dữ liệu khi nhận được từ API
            setProducts(response.data.product);
            //console.log(response.data.product[0]);

          })
          .catch(error => {
            // Xử lý lỗi nếu có
            console.error('Error fetching data:', error);
          });

    }
    getBooks();
  }, [])
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1542px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <TextField placeholder='Tìm kiếm...' width='80%' onChange={handleSearchText} />

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
                      src="images/img_plus_white_a700.svg"
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
          <div className="flex flex-wrap">
            {(textSearch ? searchValue : products || []).map(book => (
              <div key={book._id} className="w-1/2 p-1">
                <ItemBook book={book} key={book._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTwoPage;
