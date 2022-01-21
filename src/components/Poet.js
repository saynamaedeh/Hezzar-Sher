import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import background from "../assets/poet-back.png";

import './style/Poet.css';

export default function Poet() {

    const params = useParams();

    const [poem, setPoem] = useState({data: {htmlText: ''}});
    const [poet, setPoet] = useState({data: {poet: {description: ''}}});

    useEffect(() => {
        let poetId = params['poetId'];
        const fetchPoem = async () => {
            const poem = await axios.get(`https://ganjgah.ir/api/ganjoor/poem/random?poetId=${poetId}`);
            const poet = await axios.get(`https://ganjgah.ir/api/ganjoor/poet/${poetId}?catPoems=false`);
            setPoem(poem);
            setPoet(poet);
        }

        fetchPoem();
    }, []);


    const getUrl = (imageUrl) => {
        return `https://ganjgah.ir${imageUrl}`;
    }


    return (
        <section className="poet-poem" style={{backgroundImage: `url(${background})`}}>
            <div className="p-holder">
                <div className="p-holder-inner">
                    <div className="p-poem">
                        <img src={getUrl(poet.data['poet']['imageUrl'])}/>
                        <div className="poem" dangerouslySetInnerHTML={{__html: poem.data['htmlText']}}/>
                    </div>
                </div>

                <div className="p-description">
                    <div className="p-description-inner">
                        <p>{poet.data['poet']['description']}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};