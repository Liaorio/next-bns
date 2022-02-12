import axios from "axios";

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
    productsData && productsData.data && productsData.data.map((p, i) => <div key={i}>{p.name}</div>)
  )
}
