import Link from 'next/link';

const Footer = () => (
  <>
    <div>
      <Link href="https://chun.46graus.com/">
        <a>Chun Fotografia Copyright</a>
      </Link>
      <Link href="http://www.denisforigo.com">
        <a>Criado por Denis Forigo</a>
      </Link>
    </div>
    <style jsx>{`
    div{
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background: #363636;
    }
  `}</style>
  </>
)

export default Footer;