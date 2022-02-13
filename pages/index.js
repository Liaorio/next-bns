import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  const response = await axios.get('https://aolimock.free.beeceptor.com/products');
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
          {productsData.data.map(({ id, name }, index) => (
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
