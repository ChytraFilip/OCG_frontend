import { useNavigate } from 'react-router-dom';

interface RedirectButtonProps {
    sessionId: number;
    labelButton: string;
  }

const RedirectButton: React.FC<RedirectButtonProps> = ({ sessionId, labelButton}) => {
    const navigate = useNavigate()
  
    const handleButtonClick = () => {
        navigate(`/game/${sessionId}`);
    }
  
    return (
      <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 w-full" onClick={handleButtonClick}>
        {labelButton}
      </button>
    )
  }

  export default RedirectButton;