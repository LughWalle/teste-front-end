'use client'
import { FC, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      router.back();
    }
  };

  return (
    <div>
      <div className={styles.modal} onClick={handleClose}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={handleClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
