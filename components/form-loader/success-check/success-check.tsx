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



// <div>
//     <div className="success-checkmark| w-20 h-28 mx-auto">
//         <div className="check-icon-pseudo w-20 h-20 relative rounded-full box-content border-4 border-[#4CAF50]">
//             <span className="icon-line| h-[5px] bg-[#4CAF50] block rounded-sm absolute top-[46px] left-[14px] w-[25px] rotate-45  z-10 |line-tip"></span>
//             <span className="icon-line line-long"></span>
//             <div className="icon-circle"></div>
//             <div className="icon-fix"></div>
//         </div>
//     </div>

//     <center>
//     <button id="restart">Restart Animation</button>
//     </center>
// </div>