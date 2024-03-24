
import { useDispatch, useSelector } from 'react-redux';
import './styles/Youtube.css';
import { addTodo } from '../features/todoSlice';

const youtube = [
    {
        src:"https://plus.unsplash.com/premium_photo-1710548705253-51df0078daea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        src:"https://images.unsplash.com/photo-1710744722644-2114b2624557?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src:"https://plus.unsplash.com/premium_photo-1710361778453-627fdab52ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src:"https://images.unsplash.com/photo-1710587385080-6d520f9d9638?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src:"https://plus.unsplash.com/premium_photo-1710267557895-649a3e136973?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src:"https://plus.unsplash.com/premium_photo-1710548705253-51df0078daea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        src:"https://images.unsplash.com/photo-1710744722644-2114b2624557?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src:"https://plus.unsplash.com/premium_photo-1710361778453-627fdab52ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // {
    //     src:"https://images.unsplash.com/photo-1710587385080-6d520f9d9638?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // },
    // {
    //     src:"https://plus.unsplash.com/premium_photo-1710267557895-649a3e136973?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // }
]
const Youtube = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoSlice.todos);
  return (
    <div id='youtube'>
        <div className="youtube-container">
        {
            todos.length >0 ? todos.map((item) => (
                <>
                    <p>{item}</p>
                </>
            )):<h2>No todods</h2>
        }
        <button onClick={() => dispatch(addTodo("satyam"))}>Add todo</button>
            <div className="youtube-header">
                <ul>
                    <li>Youtube Logo</li>
                    <li>icon</li>
                </ul>
                <ul>
                    <li><input type="text" /><button>Search</button></li>
                </ul>
                <ul>
                    <li>My Icon</li>
                </ul>
            </div>
            <div className="youtube-content-container">
                <div className="youtube-sidebar">
                    <ul>
                        <li>Home</li>
                        <li>Shorts</li>
                        <li>Subscription</li>
                    </ul>
                </div>
                <div className="youtube-card-container">
                        {
                            youtube.map((item) => (
                                <>
                                    <div className="youtube-card">
                                        <img src={item.src} alt="" />
                                        <p>Lorem ipsum </p>
                                    </div>
                                </>
                            ))
                        }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Youtube