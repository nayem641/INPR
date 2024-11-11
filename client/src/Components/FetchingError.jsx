import { useNavigate } from "react-router";
import "./Styles/FetchingError.css"
function FetchingError({message}) {
  const navigate=useNavigate()
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">Oops! Something went wrong.</h2>
      <p className="error-message">{message}</p>
      <button className="retry-button" onClick={() => {navigate('/login')}}>
        Login 
      </button>
   
    </div>
  );
}

export default FetchingError