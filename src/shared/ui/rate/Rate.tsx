import React from "react";
import './Rate.scss'


enum rates {
    not_used = 'Скрипт не использован',
    bad = 'Плохо',
    ok = 'Хорошо',
    perfect = 'Отлично'
}

interface RateProps {
    rate: keyof typeof rates
}

const Rate: React.FC<RateProps> = ({ rate }) => {
    return (
        <div id="rate" className={`rate-${rate}`}>{rates[rate]}</div>
    )
}

export default Rate