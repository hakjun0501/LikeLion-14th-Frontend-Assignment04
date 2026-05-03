
import '../styles/components/footer.css';

function Footer({ list }) {
    return (
        <footer>
                {list.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title01}</h3>
                        <p>{item.ex}</p>
                        <p>{item.ex2}</p>
                        <p>{item.ex3}</p>
                    </li>
                ))}
        </footer>
    );  
}

export default Footer;