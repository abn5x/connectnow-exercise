import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { setOrder } from "../features/filterSlice"

const mapDispatch = { setOrder }

function CustomSelect({ options, setOrder, order }) {
    useEffect(() => {
        setOrder({ order: options[0] })
    }, [])
    const [expanded, setExpanded] = useState(false);

    function toggleExpand(e) {
        e.preventDefault();
        setExpanded(!expanded)
    }
    return (
        <div className="select-component" onClick={toggleExpand}>
            {
                expanded ? (
                    <>
                        {options
                            .filter((item) => item === order)
                            .map((item) =>
                                <div className="option" key={item}>
                                    {item}
                                    <div className={expanded ? "arrow-up" : "arrow-down"} ></div>
                                </div>)}
                        {options
                            .filter((item) => item !== order)
                            .map((item) =>
                            (
                                <div key={item} className="option" onClick={() => setOrder({ order: item })}>{item}</div>
                            ))}
                    </>
                ) : (
                    options
                        .filter((item) => item === order)
                        .map((item) =>
                            <div className="option" key={item}>
                                {item}
                                <div className={expanded ? "arrow-up" : "arrow-down"}></div>
                            </div>)
                )
            }
        </div>
    )
}

const mapState = (state) => {
    return {
        order: state.filterSlice.order
    }
}

export default connect(mapState, mapDispatch)(CustomSelect)