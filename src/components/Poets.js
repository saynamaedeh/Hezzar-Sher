import React from "react";

import background from '../assets/poet-back.png'
import {useState, useEffect, useRef} from "react";
import axios from "axios";

import './style/Poets.css';
import {Link} from "react-router-dom";

export default function Poet() {

    const ref = useRef(null);

    const [poets, setPoets] = useState([{}]);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    useEffect(() => {

        const fetch = async () => {
            const result = await axios.get('https://ganjgah.ir/api/ganjoor/poets');
            setPoets(result.data);
        }
        fetch();
    }, []);

    return (
        <section className="poet-section" style={{backgroundImage: `url(${background})`}}>
            <div className="poet-list" ref={ref}>
                {poets.map((poet) => {
                    let url = `https://ganjgah.ir${poet['imageUrl']}`;
                    let poetUrl = `/poet/${poet['id']}`;
                    return <Link to={{pathname: `/poet/${poet['id']}`}}>
                        <div className="poet"><img src={url}/><h2>{poet['nickname']}</h2></div>
                    </Link>
                })}
            </div>

            <div className="scroll-buttons">
                <i onClick={() => scroll(-1000)} className="bi bi-arrow-left-circle-fill"></i>
                <i onClick={() => scroll(1000)} className="bi bi-arrow-right-circle-fill"></i>
            </div>
        </section>
    );
};