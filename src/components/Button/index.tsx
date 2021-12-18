import { ReactElement, ReactNode } from 'react';
import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props): ReactElement {
  const { Items } = useItem();
  console.log(Items);

  return (
    <div>
      <h3 className={styles.Header}>Test Button</h3>
      <button>{children}</button>
    </div>
  );
}
