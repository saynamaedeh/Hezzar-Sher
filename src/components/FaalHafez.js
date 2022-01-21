import React from "react";

import './style/FaalHafez.css';

import {useState, useEffect} from "react";
import axios from "axios";
import background from '../assets/hafez.jpg';

export default function FaalHafez() {

    const [faal, setFaal] = useState({data: {'htmlText': '', 'recitations': [{'mp3Url': ''}]}});

    useEffect(() => {

        const fetch = async () => {
            const result = await axios.get('https://ganjgah.ir/api/ganjoor/hafez/faal');
            setFaal(result);
        }
        fetch();
    }, []);

    return (
        <section className="faal-section" style={{backgroundImage: `url(${background})`}}>
            <div className="holder">
                <div className="poem-holder">
                    <h1>{faal.data['title']}</h1>
                    <div className="poem" dangerouslySetInnerHTML={{__html: faal.data['htmlText']}}/>
                </div>
                <audio src={faal.data['recitations'][0]['mp3Url']} controls/>
            </div>


            {/*<div className="poem">*/}
            {/*    {faal.data['verses'].map(verse => {*/}
            {/*        return <div className="b">{verse.text}</div>*/}
            {/*    })}*/}
            {/*</div>*/}
            <div>

            </div>
        </section>
    );
};