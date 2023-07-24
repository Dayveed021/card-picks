import React, { useState } from 'react'
import "../Pages/Index.scss"

const Index = () => {
    const [selected, setSelected] = useState(null)

    function handleSelect(index) {
        setSelected(index);
    }

    return (
        <div className='container'>
            <div className={selected === 0 ? "box" : "not-box"} onClick={() => { handleSelect(0) }}>
                <div className="box-con">
                    <div className="top">
                        <h1>Master Card</h1>
                        <p className={selected === 0 ? "tick" : "not-tick"}>?</p>
                    </div>
                    <div className="middle">
                        <p>Choose wisely</p>
                    </div>
                    <div className="bottom">
                        <p>Are you sure this is the one you want?</p>
                    </div>
                </div>
            </div>
            <div className={selected === 1 ? "box" : "not-box"} onClick={() => { handleSelect(1) }}>
                <div className="box-con">
                    <div className="top">
                        <h1>Master Card</h1>
                        <p className={selected === 1 ? "tick" : "not-tick"}>?</p>
                    </div>
                    <div className="middle">
                        <p>Choose wisely</p>
                    </div>
                    <div className="bottom">
                        <p>Are you sure this is the one you want?</p>
                    </div>
                </div>
            </div>
            <div className={selected === 2 ? "box" : "not-box"} onClick={() => { handleSelect(2) }}>
                <div className="box-con">
                    <div className="top">
                        <h1>Master Card</h1>
                        <p className={selected === 2 ? "tick" : "not-tick"}>?</p>
                    </div>
                    <div className="middle">
                        <p>Choose wisely</p>
                    </div>
                    <div className="bottom">
                        <p>Are you sure this is the one you want?</p>
                    </div>
                </div>
            </div>
            <div className={selected === 3 ? "box" : "not-box"} onClick={() => { handleSelect(3) }}>
                <div className="box-con">
                    <div className="top">
                        <h1>Master Card</h1>
                        <p className={selected === 3 ? "tick" : "not-tick"}>?</p>
                    </div>
                    <div className="middle">
                        <p>Choose wisely</p>
                    </div>
                    <div className="bottom">
                        <p>Are you sure this is the one you want?</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Index