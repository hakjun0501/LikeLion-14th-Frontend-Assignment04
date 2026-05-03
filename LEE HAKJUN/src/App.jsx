import Header from './components/Header';
import Footer from './components/Footer';
import RecommendCard from './components/Recommend';
import { RECOMMENDLIST } from './data/recommendation';

function App() {
  return (
    
    <div className="container">
      <Header title="이학준의 영화소개" />
      <main>
        <div className="recommend-image">
          <img src='https://wimg.heraldcorp.com/news/cms/2025/10/22/news-p.v1.20251022.ef26cebb68954d86abf96c72750b5c64_P1.jpg' alt='영화 이미지' className='movie-image'/>
        </div>
        <section className="cardlist">
          {RECOMMENDLIST.map((item) => (
              <RecommendCard key={item.id} item={item} /> 
              
            ))}
        </section>
      </main>
            
      <Footer list={RECOMMENDLIST} />
  
    </div>

  );
}

export default App;