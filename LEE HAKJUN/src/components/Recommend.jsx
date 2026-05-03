function RecommendCard({ title,des,category }) {
  return (
    <h1 style={{textAlign: 'left',padding:'20px',}}>
        {title}
        <p>
          {category}
          {des}
        </p>
    </h1>
    
  );
}

export default RecommendCard;


