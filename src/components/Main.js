import './style/Main.css';

import Poem from '../assets/poem.jpg';

import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import background from "../assets/home-back.png";


export default function Main() {
    return (
        <main style={{backgroundImage: `url(${background})`}}>
            <NavBar/>
            <section className="main-section" >
                <div className="cover">
                    <img src={Poem} alt="Persian Poem"/>
                </div>
                <div className="hero">
                    <p>
                        تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر، از دیرباز با شعر و ادبیات درهم پیچیده و
                        ایران، مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشته،
                        اما شاهنامه وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و عشق بازی اش با حق، غزل های
                        عاشقانه و عارفانه عالم گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار نیشابوری همه و همه همچون
                        مرهمی بر زخم های کوچک و بزرگش تسکین داده اند.
                    </p>
                    <div className="hero-sub">
                        <button><Link to="/FaalHafez">فال حافظ</Link></button>
                        <button><Link to="/Poets">گنجینه اشعار</Link></button>
                    </div>
                </div>
            </section>
        </main>
    );
};