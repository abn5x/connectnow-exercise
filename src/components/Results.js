import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { setFilteredData } from "../features/dataSlice";

const mapDispatch = { setFilteredData }

function Results({ data, state, order, ascend, filteredData, name, rating, setFilteredData }) {
    const orderBy = {
        name: (a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0,
        nameReverse: (b, a) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0,
        date: (a, b) => new Date(a.first_release_date) - new Date(b.first_release_date),
        dateReverse: (b, a) => new Date(a.first_release_date) - new Date(b.first_release_date),
        rating: (a, b) => a.rating - b.rating,
        ratingReverse: (b, a) => a.rating - b.rating
    }

    useEffect(() => {
        setFilteredData({ data: [...data] })
    }, [data])

    useEffect(() => {
        if (!name && !rating) {
            setFilteredData({ data: [...data] })
        } else if (name && rating) {
            setFilteredData({
                data: data.filter((item) => {
                    return item.name.toLowerCase().includes(name) && parseInt(rating) <= Math.floor(parseInt(item.rating) / 10)
                })
            })
        } else if (name && !rating) {
            setFilteredData({
                data: data.filter((item) => {
                    return item.name.toLowerCase().includes(name)
                })
            })
        } else if (rating && !name) {
            setFilteredData({
                data: data.filter((item) => {
                    return parseInt(rating) <= Math.floor(parseInt(item.rating) / 10)
                })
            })
        }
    }, [name, rating])

    useEffect(() => {
        console.log(order)
        switch (order) {
            case "Release Date":
                if (ascend) {
                    setFilteredData({ data: [...filteredData].sort(orderBy.date) })
                } else {
                    setFilteredData({ data: [...filteredData].sort(orderBy.dateReverse) })
                }

                break;
            case "Score":
                if (ascend) {
                    setFilteredData({ data: [...filteredData].sort(orderBy.rating) })
                } else {
                    setFilteredData({ data: [...filteredData].sort(orderBy.ratingReverse) })
                }

                break;
            case "Name":
                if (ascend) {
                    setFilteredData({ data: [...filteredData].sort(orderBy.name) })
                } else {
                    setFilteredData({ data: [...filteredData].sort(orderBy.nameReverse) })
                }

                break;
            default:
                break;
        }

    }, [order, ascend])

    return (
        <div className="results">
            {
                state ? <div className="loading"><h2>Loading data...</h2></div> :
                    filteredData.map((item) => {
                        return <Item item={item} key={item.id}></Item>
                    })
            }
        </div>
    )
}
const mapState = (state) => {
    return {
        data: state.dataSlice.data,
        state: state.dataSlice.loading,
        filteredData: state.dataSlice.filteredData,
        name: state.filterSlice.name,
        rating: state.filterSlice.rating,
        order: state.filterSlice.order,
        ascend: state.filterSlice.ascend
    }
}
export default connect(mapState, mapDispatch)(Results)