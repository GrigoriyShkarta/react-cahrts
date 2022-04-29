import {useState} from "react";

import '../scss/components/_cheked.scss'

const Checked = ({items, toggleChart}) => {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index);
        toggleChart(index)
    };

    const renderCheckbox = items.map((item, index) =>
        <li key={`${item}_${index}`} className="box">
            <label form={item} className="radio">
                <input
                    type="radio"
                    name="check"
                    id={item}
                    className="radio__input"
                    checked={activeItem === index}
                    onChange={() => onSelectItem(index)}
                />
                <span className="radio__text">{item}</span>
            </label>
        </li>
    )

    return (
        <div>
            <ul className="wrapperRadio">
                {renderCheckbox}
            </ul>
        </div>
    );
};

export default Checked;