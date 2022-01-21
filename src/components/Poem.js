import React, {useState, useEffect} from "react";

import background from "../assets/poet-back.png";
import {useParams} from "react-router-dom";
import axios from "axios";

import './style/PoemPage.css';

export default function Poem() {

    const params = useParams();

    const [poem, setPoem] = useState({data: {htmlText: ''}});

    useEffect(() => {
        let poemId = params['poemId'];
        const fetchPoem = async () => {
            const poem = await axios.get(`https://ganjgah.ir/api/ganjoor/poem/${poemId}?catInfo=true&catPoems=false&rhymes=false&
            recitations=false&images=false&
            songs=false&comments=false&verseDetails=false&navigation=false&relatedpoems=false`);
            setPoem(poem);
        }

        fetchPoem();
    }, []);

    return (
        <section className="p-p-section" style={{backgroundImage: `url(${background})`}}>
            <div className="p-p-holder">
                <div className="p-p-holder-inner">
                    <div className="p-poem">
                        {
                            poem.data['htmlText'].length > 0 ?
                                <div className="poem" dangerouslySetInnerHTML={{__html: poem.data['htmlText']}}/>
                                :
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
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};