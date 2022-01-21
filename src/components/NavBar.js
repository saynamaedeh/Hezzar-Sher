import './style/NavBar.css';

import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>هزار شعر</li>
                <li><Link to="/faalHafez">فال حافظ</Link></li>
                <li><Link to="/poets">گنجینه اشعار</Link></li>
                <li><Link to="/search">جستجو</Link></li>
            </ul>
        </nav>
    );
}
