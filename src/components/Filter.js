import React, { useEffect } from 'react'
import arrow from "../assets/arrow.svg";
import CustomSelect from './CustomSelect';
import { setName, setRating, clearFilters, toggleAscend, setOrder } from '../features/filterSlice'
import { connect } from 'react-redux'


const mapDispatch = { setName, setRating, clearFilters, toggleAscend, setOrder }

function Filter({ setName, setRating, clearFilters, toggleAscend, name, rating, ascend, setOrder, order }) {
    const filters = ["Release Date", "Score", "Name"]
    useEffect(() => {
        console.log("set name!")
        setName({ name })
        setRating({ rating })
        setOrder({ order })
    }, [])

    function handleName(e) {
        e.preventDefault()
        setName({ name: e.target.value })
    }
    function handleRating(e) {
        e.preventDefault()
        let value = e.target.value;
        const re = /^[0-9\b]+$/
        if (value === '' || re.test(value)) {
            setRating({ rating: value })
        }
    }
    return (
        <div className="filter-component">
            <h3>Filter Results</h3>
            <label htmlFor="name">Name (contains)</label>
            <input name="name" id="name" placeholder="Text string" value={name} onChange={handleName}></input>
            <label htmlFor="score">Minimum Score</label>
            <input name="score" id="score" placeholder="1 - 10" value={rating} onChange={handleRating}></input>
            <label htmlFor="orderBy">Order By</label>
            <div name="orderBy" id="orderBy" className="orderBy">
                <div className={ascend ? "ascend box" : "descend box"} onClick={() => toggleAscend({})}>
                    <img src={arrow} alt="Arrow setting the order"></img>
                </div>
                <CustomSelect options={filters} />
            </div>
            <div className="clear-btn" onClick={() => clearFilters({})}>Clear</div>
        </div>
    )
}
const mapState = (state) => {
    return {
        name: state.filterSlice.name,
        rating: state.filterSlice.rating,
        ascend: state.filterSlice.ascend,
        order: state.filterSlice.order
    }
}
export default connect(mapState, mapDispatch)(Filter)