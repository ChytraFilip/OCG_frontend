
import news from '../assets/news.jpg'

const News = () => {
    return (
        <div className="text-white p-4 text-center"
             style={{ backgroundImage: `url(${news})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'white' }}>
            <h1 className="text-4xl font-bold mb-4">What´s new?</h1>
        </div>
    );
}

export default News;
