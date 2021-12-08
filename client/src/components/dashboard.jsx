import { useNavigate } from 'react-router';
import '../css/dashboard.css'
import * as images from '../img'
import Navbar from './navbar';

const Dashboard = () => {

    const navigate = useNavigate();

    const singleCard = (author, title, img) => {
        localStorage.setItem('title', title);

        return (
                <div className="card">
                <div className="face face1">
                    <div className="content">
                    <span className="stars"></span>
                    <h2 className="java">{title}</h2>
                    <p className="java">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non maxime quae blanditiis nisi perferendis possimus! Eligendi numquam assumenda ipsa!</p>
                    </div>
                </div>
                <div className="face face2" style={cardStyle(img)}>
                    <h2 onClick={() => navigate('/book', 
                    {
                        state:{
                            title,
                            author,
                            img
                        }
                    })}>{title}</h2>
                </div>
                </div>
        );
    }

    const allCards = () => {
        let rows = [];
        let i = 0;
        for(let x in images){
            rows.push(singleCard(authors[i], bookNames[i], images[x]));
            i++;
        }

        return <div className="container">{rows}</div>
    };

    return (
        <>
            <Navbar />
            <div className="Dashboard">
                {allCards()}
            </div>
        </>
    );
}
 
export default Dashboard;

function cardStyle(x){
    return {
        backgroundImage: `url(${x})`,
        borderRadius: '15px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
}

let bookNames = ['To Kill a Mockingbird', '1984', 'Harry Potter and the Philosopher’s Stone', 'The Lord of the Rings', 'The Great Gatsby', 'Pride and Prejudice', 'The Diary Of A Young Girl', 'The Book Thief', 'The Hobbit', 'Little Women', 'Fahrenheit 451', 'Jane Eyre', 'Animal Farm', 'Gone with the Wind']

let authors = ['Harper Lee', 'George Orwell', 'J.K. Rowling', 'J.R.R. Tolkien', 'F. Scott Fitzgerald', 'Jane Austen', 'Anne Frank', 'Markus Zusak', 'J.R.R. Tolkien', 'Louisa May Alcott', 'Ray Bradbury', 'Charlotte Bronte', 'George Orwell', 'Margaret Mitchell']