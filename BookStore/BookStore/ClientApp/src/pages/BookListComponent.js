import React, { useState,useEffect } from "react";
import "../css/bookList.css";
import BookDetail from '.././fragments/BookDetail';
import { getAllBooks } from '../DataManage/service/bookService';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function BookListComponent() {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState([]);


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
                                <h5 className="card-title BookTableTitle border-0">
                                    Book List
                                </h5>
                                <br></br>
                                <Typeahead
                                    id="basic-example"
                                    labelKey="title"
                                    onChange={setSelected}
                                    options={options}
                                    placeholder="Choose a book..."
                                    selected={selected}
                                />
                                <table className="table table-sm table-borderless BookTableHeader mb-0">
                                    <thead>
                                        <tr>
                                            <th>Book Id</th>
                                            <th>Title</th>
                                            <th>Quantity</th>
                                            <th>Reservation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selected.length !== 0 &&
                                            selected.map((book)=>{
                                                return (
                                                    <BookDetail key={book.bookId}
                                                        bookDetail={book}
                                                    />
                                                    );


                                        })
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
