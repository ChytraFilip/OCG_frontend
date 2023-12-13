import { useNavigate } from 'react-router-dom';

interface RedirectButtonProps {
    sessionId: string;
    labelButton: string;
  }

const RedirectButton: React.FC<RedirectButtonProps> = ({ sessionId, labelButton}) => {
    const navigate = useNavigate()
  
    const handleButtonClick = () => {
      navigate(`/game/${sessionId}`);
    }
  
    return (
      <button className="bg-purple-800 text-white px-4 py-2 rounded w-full" onClick={handleButtonClick}>
        {labelButton}
      </button>
    )
  }

  export default RedirectButton;