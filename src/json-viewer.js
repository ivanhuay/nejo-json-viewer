import React from 'react';

import styles from './json-viewer.module.scss';

const JSONViewer = ({ jsonData }) => {
    const isArray = Array.isArray(jsonData);
    if (isArray) {
        return (
            <div className={styles.container}>
                <div className={styles.separator}>[</div>
                {jsonData.map((elmData, i) => (
                    <JSONViewer key={i} jsonData={elmData} />
                ))}
                <div className={styles.separator}>]</div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.separator}>[</div>
            {Object.keys().map((elmKey) => (
                <div key={elmKey} className={styles.element}>
                    <div className={styles.key}>{elmKey}</div>
                    <div className={styles.separator}>:</div>
                    <div className={styles.value}>{jsonData[elmKey]}</div>
                </div>
            ))}
            <div className={styles.separator}>]</div>
        </div>
    );
};

export default JSONViewer;
