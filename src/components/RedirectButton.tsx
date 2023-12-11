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
      <button onClick={handleButtonClick}>
        {labelButton}
      </button>
    )
  }

  export default RedirectButton;