import cx from 'classnames';
import Link from 'next/link';

const Button = props => (
  <button className={cx('root', props.large && 'large')}>
    {props.children}
    <style jsx>{`
      .root {
        border: none;
        padding: 20px;
        background: #eee;
        color: #888;
        display: inline-block;
      }
      .large {
        padding: 60px;
      }
    `}</style>
  </button>
);

const Index = () => (
  <div>
    <Link href="/OfficeHome">
      <a>Office home</a>
    </Link>
    <style jsx global>{``}</style>
  </div>
);

export default Index;
