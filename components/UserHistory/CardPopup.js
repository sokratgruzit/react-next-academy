import { useDispatch } from 'react-redux';
import { makeStateFalse } from "../../store/mode/modeSlice";

import CornerDecor from "../UI/CornerDecor/CornerDecor";


import styles from "../../styles/UserHistory/CardPopup.module.scss"
import { log } from 'util';
import { useState } from 'react';

export default function CardPopup({setOpenBar, data , cngWidth, changeWidthHandler }) { 
  const dispatch = useDispatch(false);
  const [ chngColumns , setchngColums ] = useState(true)

    const changeColumnHandler = () => {
        changeWidthHandler(false)
    };
    return (
        <div className="textStyles container">
            <div className={styles.cardPopUp}>
                <img 
                    className={styles.group}
                    src='img/UserHistory/Group.png'
                    onClick={() => { 
                        setOpenBar(false)
                        dispatch(makeStateFalse())
                        changeColumnHandler()
                     }}
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
                <div className={styles.line}></div>
                <div className={styles.container}>
                    <h6 className={styles.dataTitle}>{data.title}</h6>
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
                    <div className={styles.dataContainer } >
                        <CornerDecor />
                        <div className={styles.dataImgCornerDecor}>
                            <img 
                                src={data.img} 
                                className={styles.dataImg}
                            />
                        </div>
                    </div>
                    <p className={styles.dataSubTxt}>{data.subTxt}</p>
                </div>
                <div className={styles.lowerBox}>
                    <h1 className={styles.lowerBoxTitl}>Earn a Badge:</h1>
                        <img className={styles.badge} src='img/UserHistory/badge1.png'/>
                        <p className={styles.text}>I’m here!</p>
                    <div className={styles.button}>
                        <button className={styles.buttonBox}>
                            <img
                                className={styles.img}
                                src="img/UserHistory/image.png"
                            />
                            <h5 className={styles.buttonTtle}>See More Details</h5>
                        </button>                      
                    </div>
                </div>
            </div>
        </div>
    );
};