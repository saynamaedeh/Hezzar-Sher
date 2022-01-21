import background from "../assets/poet-back.png";
import React, {useState} from "react";

import './style/Search.css';
import axios from "axios";
import {Link} from "react-router-dom";

export default function Search() {

    const [search, setSearch] = useState('');
    const [searchPage, setSearchPage] = useState(1)
    const [result, setResult] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const onSearchClick = () => {
        if (search.length > 0) {
            setSearchPage(1);
            setLoading(true);
            fetch();
        }
    }

    const fetch = async () => {
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        const result = await axios.get(`https://ganjgah.ir/api/ganjoor/poems/search?PageNumber=${searchPage}&PageSize=10&term=${search}&poetId=0&catId=0`, config);
        setResult(result.data);
    }

    const setSearchKey = (event) => {
        let value = event.currentTarget.value;
        setSearch(value);
    }

    const nextPage = () => {
        setResult([]);
        setSearchPage(searchPage + 1);
        fetch();
    }

    return (
        <section className="search-section" style={{backgroundImage: `url(${background})`}}>
            <div className="s-holder">
                <input placeholder="کلمه ای برای جستجو وارد کنید..." onChange={event => setSearchKey(event)}/>
                <i className="bi bi-search" onClick={() => onSearchClick()}></i>
            </div>

            <div className="s-result">
                {result.length > 0 ?

                    <>
                        {result.map((poem, index) => {
                            return <Link className="poem-link" to={{pathname: `/poem/${poem['id']}`}} key={index}>{poem['title']}</Link>
                        })}
                        <button className="more-button" onClick={() => nextPage()}>بیشتر</button>
                    </>

                    :
                    isLoading ?
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        :
                        <>موردی برای نمایش وجود ندارد</>
                }
            </div>
        </section>
    );
};