Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    var dayOfYear = ((today - onejan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
  };

function Week(props) {

    const className = props.filled ? 'week-box filled tooltip': 'week-box tooltip';
    return (
        <span className={className}>
            <span className="tooltiptext">Week: {props.week}</span>
        </span>
    );
}
function Year(props) {
    let year = []
    for(let i = 0; i < 52; i++){

        const week = (props.count * 52 + i + 1)
        let filled = (week <= props.weeks)? true: false;

        year.push(<Week name="Sara" filled={filled} key={week} week={week} />)
    }
    let count = (((props.count + 1) % 5) === 0 ) ? (props.count + 1) : null;
    return (
        <div className="year">
            {year}
            {count? <span className="year-count">{ count }</span>: null}
        </div>
    );
}

function weeksBetween(d1, d2) {
    return Math.round((d1 - d2) / (7 * 24 * 60 * 60 * 1000));
}

function App() {
    let years = []
    let weeks = weeksBetween(new Date(), new Date(1991, 11, 6));
    for(let i = 0; i < 80; i++){
        years.push(<Year count={(i )} key={i} weeks={weeks} /> )
    }
return (
    <div id="main">
        <p id="title">MEMENTO MORI</p>
        <div id="life-box">
            <div className="frame" >
                {years}
            </div>
        </div>
    </div>
);
}
  
ReactDOM.render(<App />, document.getElementById('root'));