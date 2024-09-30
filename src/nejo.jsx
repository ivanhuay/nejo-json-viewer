import React from 'react';

import styles from './nejo.module.scss';

const Nejo = ({ jsonData, className }) => {
    const isArray = Array.isArray(jsonData);

    const TypeRender = ({value}) => {
        if(typeof value === 'string') {
            return <div className={styles.text}>{value}</div>
        }
        if(typeof value === 'number') {
            return <div className={styles.number}>{value}</div>
        }
        if(value instanceof Date && !isNaN(value.valueOf())) {
            return <div className={styles.date}>{value.toISOString()}</div>
        }
        if(typeof value === 'object') {
            return <Nejo jsonData={value} />
        }
        return <div className={styles.defaultType}>{value}</div>
    }
    if (isArray) {
        return (
            <div className={styles.container}>
                <div className={styles.marker}>[</div>
                {jsonData.map((elmData, i) => (
                    <Nejo key={i} jsonData={elmData} />
                ))}
                <div className={styles.marker}>]</div>
            </div>
        );
    }
    return (
        <div className={[styles.container, className].join(' ')}>
            <div className={styles.marker}>&#123;</div>
            <div className={styles.content}>
                {Object.keys(jsonData).map((elmKey) => (
                    <div key={elmKey} className={styles.row}>
                        <div className={styles.key}>{elmKey}</div>
                        <div className={styles.separator}>:</div>
                        <div className={styles.value}><TypeRender value={jsonData[elmKey]}/></div>
                    </div>
                ))}
            </div>
            <div className={styles.marker}>&#125;</div>
        </div>
    );
};

export default Nejo;
