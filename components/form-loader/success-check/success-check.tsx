import styles from './check.module.css';
import { useRef, useEffect } from 'react';

const SuccessCheck = () => {

    const checkmarkRef = useRef(null);

    useEffect(() => {

        setTimeout(() => {
            if(checkmarkRef.current) {
                (checkmarkRef as any).current.classList.add("lg:-translate-x-40");
            }
        }, 1000);
    }, [])


    return(
        <div className='flex justify-center items-center'>
            <div ref={checkmarkRef} className='transition duration-500 scale-[40%] absolute -bottom-10 right-40'>
                <div className={styles.successCheckmark}>
                    <div className={styles.checkIcon}>
                        <span className={`${styles.iconLine} ${styles.lineTip}`}/>
                        <span className={`${styles.iconLine} ${styles.lineLong}`}/>
                        <div className={styles.iconCircle}/>
                        <div className={styles.iconFix}/>
                    </div>
                </div>
            </div>
            <div className='mb-2 animate-opacity hidden lg:block'>Check your inbox</div>
        </div>
    )
}

export default SuccessCheck;