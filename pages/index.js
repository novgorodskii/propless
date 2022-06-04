import { useContext } from 'react';
import Header from '../components/Header'
import List from '../components/List'
import Modal from '../components/UI/Modal/Modal';
import { ProductsContext } from '../context/context';
import { fetcher } from '../lib/api'

export default function Home({subs}) {

  const { show, setShow } = useContext(ProductsContext);
  const close = () => setShow(false);
  return (
    <div>
      {
        show ? <Modal close={close} /> : null
      }
      <Header />
      <List subs={subs.data} />
    </div>
  )
};

export async function getStaticProps() {
  const subsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/subscriptions`);
  console.log(subsResponse, 'subsResponse');
  return {
    props: {
      subs: subsResponse
    }
  }
}