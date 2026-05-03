import '../styles/components/recommend.css';

function RecommendCard({ item }) {
  return (
    <div className="recommend-card">
      <span className="category">{item.category}</span>
      <h2>{item.title}</h2>
      <h1>{item.title02}</h1>
      <p>{item.des}</p>
      <p>{item.des2}</p>
      <p>{item.link}</p>
      <p>{item.link2}</p>
    </div>
  );
}

export default RecommendCard;