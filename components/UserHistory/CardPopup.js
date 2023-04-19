import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/UserHistory/CardPopup.module.scss"


export default function CardPopup({setOpenBar, data }) { 
    return (
        <div className="textStyles container">
            <div className={styles.cardPopUp}>
                <img 
                    className={styles.group}
                    src='img/UserHistory/Group.png'
                    onClick={() => {setOpenBar(false)}}
                />
                <p className={styles.title}>Completed</p>
                <div className={styles.box}>
                <CornerDecor />
                    <div className={styles.hderBox}>
                        <div className={styles.top}>
                            <div className={styles.avatar}>
                                <img
                                    className={styles.img}
                                    src="img/UserHistory/avatar.png"
                                    alt="img"
                                />
                            </div>
                            <div className={styles.topTitle}> 
                                <h6>0xF5...301c</h6>
                                <p>0xF5...301c</p>
                                <img className={styles.gropPng} src="img/UserHistory/Grop.png" />
                            </div>
                        </div>
                        <div className={styles.dataTaitle}>
                            <img  
                                src={data.vector} 
                                className={styles.vectorImg}
                            />
                            <p>{data.date}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <h7 className={styles.dataTitle}>{data.title}</h7>
                    <div className={styles.level}>
                        <img 
                            src='img/UserHistory/pointonegren.png' 
                            className={styles.pointonegren}
                        />
                        <p>beginner</p>
                        <img 
                            src='img/UserHistory/pointone.png'
                            className={styles.pointone}
                        />
                        <p>Security</p>
                        <img
                            src='img/UserHistory/point.png' 
                            className={styles.point}
                        />
                        <p>8 min</p>
                    </div>
                    <img 
                        src={data.img} 
                        className={styles.dataImg}
                    />
                    <p 
                    className={styles.dataSubTxt}>{data.subTxt}</p>
                </div>
                <div className={styles.lowerBox}>
                    <h1 className={styles.lowerBoxTitl}>Earn a Badge:</h1>
                    <div className={styles.badge}>
                        <img src='img/UserHistory/badge1.png'/>
                        <p>I’m here!</p>
                    </div>
                    <div className={styles.button}>
                        <p>See More Details</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};