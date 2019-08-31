import Link from 'next/link'
import Header from '../components/Header'

const Index = () => (
  <div>
    <Header />
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
