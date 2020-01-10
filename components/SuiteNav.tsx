import cx from 'classnames';
import { Icon } from './Icon';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { ProductTitle } from './ProductTitle';
import { FarArea } from '../pages/OfficeHome';
export const SuiteNav = ({ ...rest }) => (
  <div {...rest} className={cx('root', rest.root)}>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: start;
        height: 48px;
        line-height: 48px;
      }
      .root > * {
        margin-left: 8px;
        background-color: yellow;
      }
    `}</style>
    <Button>
      <Icon name="WaffleOffice365" />
    </Button>
    <ProductTitle>Office</ProductTitle>
    <FarArea>
      <Button>
        <Icon name="question" />
      </Button>
      <Button>
        <Avatar initials="DZ" />
      </Button>
    </FarArea>
  </div>
);
