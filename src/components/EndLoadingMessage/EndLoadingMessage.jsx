import React, { useEffect, useState } from 'react';

import styles from './EndLoadingMessage.module.scss';

function EndLoadingMessage() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (!showMessage) return null;

  return (
    <div className={styles.endLoadingMessage}>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nO2WSw7CMAxEfZS6XdLjgLqAw7DkAE24Z7wEKagIJH4RIRTFFvOkLrrqm3FjhQgAAAAAIEk3yoKswl5WjQ8H9rIjw/Lx8tgJ0TgZHuTj9N566clg85FdOPJe1qQdhnwlGM1XgtF8JdD83zXfzXAjTF0PGicD/RJ2sj235GRjrnme5G8/WBCimnzrpf925NV+mys8huXL9jImoWZVckEINfIlIdTJfxJCrXxOCPXybzdLzW0zyyS0N58dwoJ8MoQl+acQFuXvDrbWAwsAAACQYk7Nq1Hwy2Lm6QAAAABJRU5ErkJggg=="
        alt="icon"
        className={styles.image}
      />
      Все билеты загружены
    </div>
  );
}

export default EndLoadingMessage;
