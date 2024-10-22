import {useEffect, useState} from "react";
import "../../style/ThingInfo.css"

function ThingInfo({item}) {

    return (
        <div className="thingInfo" id="thing">
            <h1>Информация о товаре</h1>

            <div className="email">
                <label>Идентификатор</label>
                <div className="sec-2">
                    <div>{item.id}</div>
                </div>
            </div>

            <div className="email">
                <label>Название</label>
                <div className="sec-2">
                    <div>{item.name}</div>
                </div>
            </div>

            <div className="email">
                <label>Описание</label>
                <div className="sec-2">
                    <div>{item.description}</div>
                </div>
            </div>

            <div className="email">
                <label>Гарантия</label>
                <div className="sec-2">
                    <div>{item.warranty}</div>
                </div>
            </div>

        </div>
    );
}

export default ThingInfo;