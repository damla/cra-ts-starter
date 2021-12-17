import { ReactElement, ReactNode } from 'react';
// import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props): ReactElement {
  return (
    <div>
      <h3 className={styles.Header}>Test Button</h3>
      <button>{children}</button>
    </div>
  );
}
