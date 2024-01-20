import { Link } from "react-router-dom";

// Component hiển thị thông tin sách
const ItemBook = ({ book }) => (
    // Hàm cắt đoạn văn bản và thêm dấu "..."

    <Link to={`/detail/${book._id}`}>
    <div style={{ padding: 10 }} className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img style={{ width: '300px', minWidth: '290px', maxHeight: '400px', borderRadius: 10 }} alt='logo' src={book.image} />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden "
                style={{
                    textOverflow: 'ellipsis',
                    maxHeight: '12em',
                    overflow: 'hidden'
                }}>{book.description}...</p>

        </div>
    </div></Link>
);

export default ItemBook;