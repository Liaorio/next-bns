import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  const response = await axios.get('https://6209943b6df46f0017f4c551.mockapi.io/api/v1/products');
  const productsData = response.data;
  return {
    props: {
      productsData
    }
  }
}

export default function Home({ productsData }) {
  return (
    <div>
        <ul>
          {productsData.map(({ id, name }, index) => (
            <li key={index}>
              <Link href={`/products/${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
  )
}
