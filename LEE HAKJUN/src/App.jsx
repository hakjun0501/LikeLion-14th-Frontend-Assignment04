import Header from './components/Header';
import Footer from './components/Footer';
import RecommendCard from './components/Recommend';

function App() {
  const RECOMMENDLIST = [
    {
      id: 1,
      title: "체인소맨 레제편", 
      des: "영화끝나고도 2개월간 여운을 남긴 영화입니다.",
      category: "학준이가 보고 운 영화 /"
    },
  ];

  const MUSIC = [
    {
      id: 1,
      title: "IRIS OUT, in the pool",
      des: "영화에서 사용된 음악중 가장 인기있는 리스트입니다.",
      category: "정말로 엄청난 음악들 /"
    },
  ];

  const MYFEEL = [
    {
      id: 1,
      title: "영화소개!", 
      des: "후지모토 타츠키의 만화 체인소 맨을 원작으로 하는 극장판입니다.", 
      category: "나의 감상 /"
    },
  ];

  return (
    <div> 
      <Header title="이학준의 영화소개" />
      <main>
    
        <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px'}}>
          {RECOMMENDLIST.map((item) => (
            <RecommendCard 
              key={item.id}
              title={item.title}
              des={item.des}
              category={item.category}
            />
          ))}
        </div>

    
        <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px'}}>
          {MUSIC.map((item) => (
            <RecommendCard
              key={item.id}
              title={item.title}
              des={item.des}
              category={item.category}
            />
          ))}
        </div>

     
        <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px'}}>
          {MYFEEL.map((item) => (
            <RecommendCard
              key={item.id}
              title={item.title}
              des={item.des}
              category={item.category}
            />
          ))}
        </div>
      </main>

      <Footer list={MYFEEL} /> 
    </div>
  );
}

export default App;