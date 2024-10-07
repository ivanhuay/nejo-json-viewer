import React from 'react';

import styles from './nejo.module.scss';

const Nejo = ({ jsonData, className, endingChar = '' }) => {
    const isArray = Array.isArray(jsonData);

    const TypeRender = ({ value, endingChar }) => {
        if (typeof value === 'string') {
            if (/^(http|https)/.test(value)) {
                return (
                    <>
                        <a href={value} className={styles.link}>
                            {value}
                        </a>
                        {endingChar}
                    </>
                );
            }
            if (/\S+@\S+\.\S+/.test(value)) {
                return (
                    <>
                        <a href={`mailto:${value}`} className={styles.link}>
                            {value}
                        </a>
                        {endingChar}
                    </>
                );
            }
            return (
                <>
                    <div className={styles.text}>{value}</div>
                    {endingChar}
                </>
            );
        }
        if (typeof value === 'number') {
            return (
                <>
                    <div className={styles.number}>{value}</div>
                    {endingChar}
                </>
            );
        }
        if (typeof value === 'boolean') {
            return (
                <>
                    <div className={styles.number}>{value.toString()}</div>
                    {endingChar}
                </>
            );
        }
        if (value instanceof Date && !isNaN(value.valueOf())) {
            return (
                <>
                    <div className={styles.date}>{value.toISOString()}</div>
                    {endingChar}
                </>
            );
        }
        if (typeof value === 'object') {
            return <Nejo jsonData={value} endingChar={endingChar} />;
        }
        return (
            <>
                <div className={styles.defaultType}>{value}</div>
                {endingChar}
            </>
        );
    };

    if (isArray) {
        return (
            <div className={styles.container}>
                <div className={styles.marker}>[</div>
                {jsonData.map((elmData, i) => (
                    <div key={i} className={styles.arrayElm}>
                        {Array.isArray(elmData) || typeof elmData === 'object' ? (
                            <Nejo
                                jsonData={elmData}
                                endingChar={i < jsonData.length - 1 ? ',' : ''}
                            />
                        ) : (
                            <TypeRender
                                value={elmData}
                                endingChar={i < jsonData.length - 1 ? ',' : ''}
                            />
                        )}
                    </div>
                ))}
                <div className={styles.marker}>]</div>
            </div>
        );
    } else if (typeof jsonData !== 'object') {
        return <TypeRender value={jsonData} />;
    }

    const keys = Object.keys(jsonData);

    return (
        <div className={[styles.container, className].join(' ')}>
            <div className={styles.marker}>&#123;</div>
            <div className={styles.content}>
                {keys.map((elmKey, i) => (
                    <div key={elmKey} className={styles.row}>
                        <div className={styles.key}>{elmKey}</div>
                        <div className={styles.separator}>:</div>
                        <div className={styles.value}>
                            <TypeRender
                                value={jsonData[elmKey]}
                                endingChar={i < keys.length - 1 ? ',' : ''}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.marker}>&#125; {` ${endingChar}`}</div>
        </div>
    );
};

export default Nejo;
