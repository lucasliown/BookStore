import React, { useState, useEffect } from "react";
import "../css/bookList.css";
import BookDetail from '.././fragments/BookDetail';
import { getAllBooks } from '../DataManage/service/bookService';
import { Typeahead } from 'react-bootstrap-typeahead';
import { reserveABook } from '../DataManage/reserveData';

function BookListComponent() {
    const [options, setOptions] = useState([]);
    //store search result 
    const [selected, setSelected] = useState([]);

    //this is callback function for reserve a book
    const handleReserve = async (bookid, customerId) => {
        const bookDetail = await reserveABook(bookid, customerId);
        //change the quantity of book in the options array
        let temp_options = [...options];
        for (const book of temp_options) {
            if (book.bookId === bookDetail.bookId) {
                book.quantity = bookDetail.quantity
            }
        }
        setOptions(temp_options);
        //change the quantity of book in the selected array
        let temp_selected = [...selected];
        for (const book of temp_selected) {
            if (book.bookId === bookDetail.bookId) {
                book.quantity = bookDetail.quantity
            }
        }
        setSelected(temp_selected);
    }

    //call api for get all the books
    useEffect(() => {
        const fetchAllBooks = async () => {
            const bookData = await getAllBooks();
            console.log(bookData);
            setOptions(bookData);
        }
        fetchAllBooks();
    }, []);

    return (
        <main role="main" className="min-vh-100 backgroundColorBookList">
            <div className="container moveList mb-5">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm-8">
                        <div className="card border-0">
                            <div className="card-body tableBackgroundColor p-5 shadow">
                                <h5 className="card-title bookTableTitle border-0">
                                    Book List
                                </h5>
                                <br></br>
                                <Typeahead
                                    id="typeahead"
                                    labelKey="title"
                                    onChange={setSelected}
                                    options={options}
                                    placeholder="Search a book..."
                                    selected={selected}
                                />
                                <br></br>
                                <table className="table table-sm table-borderless bookTableHeader mb-0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Quantity</th>
                                            <th>Reservation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selected.length !== 0 ? (
                                            selected.map((book) => {
                                                return (
                                                    <BookDetail key={book.bookId}
                                                        bookDetail={book}
                                                        reserve={handleReserve }
                                                    />
                                                );
                                            }))
                                            :
                                            (options.map((book) => {
                                                return (
                                                    <BookDetail key={book.bookId}
                                                        bookDetail={book}
                                                        reserve={handleReserve}
                                                    />
                                                );
                                            }))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm"></div>
                </div>
            </div>
        </main>
    );
}

export default BookListComponent;
