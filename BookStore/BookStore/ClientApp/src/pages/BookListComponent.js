import React, { useState, useEffect } from "react";
import "../css/bookList.css";
import BookDetail from '.././fragments/BookDetail';
import { getAllBooks } from '../DataManage/service/bookService';
import { Typeahead } from 'react-bootstrap-typeahead';

function BookListComponent() {
    const [options, setOptions] = useState([]);
    //store search result 
    const [selected, setSelected] = useState([]);

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
                                                    />
                                                );
                                            }))
                                            :
                                            (options.map((book) => {
                                                return (
                                                    <BookDetail key={book.bookId}
                                                        bookDetail={book}
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
