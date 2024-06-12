import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoreAbtBook.css';

const MoreAbtBook = () => {
    const { BookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const resp = await fetch(`https://www.googleapis.com/books/v1/volumes/${BookId}`);
                const data = await resp.json();
                setBook(data);
            } catch (error) {
                console.log("Error fetching book details:", error);
            }
        };

        fetchBookDetails();
    }, [BookId]);

    if (!book) {
        return <div>Loading...</div>;
    }

    const {
        title,
        subtitle,
        authors,
        publisher,
        publishedDate,
        description,
        imageLinks,
        canonicalVolumeLink,
        previewLink,
        categories,
        pageCount
    } = book.volumeInfo;

    const { saleInfo } = book;
    const isEbook = saleInfo?.isEbook;
    const isFreeEbook = saleInfo?.saleability === "FREE";
    const isPaidEbook = saleInfo?.saleability === "FOR_SALE";

    return (
        <>
        <div className="biggestdiv">
            <div className='header'>
                <h1>TopBooks</h1>
            </div>
            <div className="book-details-container">
                <div className="book-details">
                    {imageLinks?.thumbnail && <img src={imageLinks.thumbnail} alt="Book cover" />}
                    <div className="book-info">
                        <h1>{title}</h1>
                        {subtitle && <h2>{subtitle}</h2>}
                        {authors && <h2>{authors.join(', ')}</h2>}
                        <h3>Publisher: {publisher}</h3>
                        <h3>Published Date: {publishedDate}</h3>
                        {pageCount && <h3>Pages: {pageCount}</h3>}
                        {description}
                        <h3 className='cat'>Categories: {categories?.join(', ')}</h3>
                        <button className='morebtn'>Ebook: {isEbook ? "Ebook available" : "Ebook not available"}</button>
                        {isFreeEbook && <p>This ebook is free.</p>}
                        {isPaidEbook && <p>This ebook is for sale.</p>}
                        {(canonicalVolumeLink || previewLink) && (
                            <button className='morebtn'>
                                <a href={canonicalVolumeLink || previewLink} target="_blank" rel="noopener noreferrer">
                                    Read this book
                                </a>
                            </button>
                        )}
                    </div>
                </div>
                <div className="ratings-comments-section">
                    <h2>Rate this book</h2>
                    <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="star">&#9733;</span>
                        ))}
                    </div>
                    <h2>Comments</h2>
                    <textarea placeholder="Write your comment here..." className="comment-box"></textarea>
                    <button className="submit-button">Submit</button>
                    <div className="comments-section">
                        <div className="comment">
                            <p><strong>User1:</strong> This book is amazing!</p>
                        </div>
                        <div className="comment">
                            <p><strong>User2:</strong> I learned so much from this book.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default MoreAbtBook;
