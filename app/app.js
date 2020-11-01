const NUMBERS = [
    {column: 1, number: 7}, {column: 1, number: 8}, {column: 1, number: 9}, {column: 1, number: '/'},
    {column: 2, number: 4}, {column: 2, number: 5}, {column: 2, number: 6}, {column: 2, number: '*'},
    {column: 3, number: 1}, {column: 3, number: 2}, {column: 3, number: 3}, {column: 3, number: '+'},
    {column: 4, number: '.'}, {column: 4, number: 0}, {column: 4, number: '='}, {column: 4, number: '-'},
    {column: 5, number: 'Clear'}
];

function Buttons ({lastColumn, handleClick}) {
    
    const rows = [];
    
    NUMBERS.forEach((cont, key) => {
        if (cont.column === lastColumn) {
            
            rows.push(
                lastColumn == 5 
                ?
                    <td key={key} colSpan="4">
                        <button onClick={(e) => handleClick(e.target.innerText)}>{cont.number}</button>
                    </td>
                :
                    <td key={key}>
                        <button onClick={(e) => handleClick(e.target.innerText)}>{cont.number}</button>
                    </td>
            );
        }
    });
    
    return (
        <React.Fragment>{rows}</React.Fragment>
    )
}

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            input: '',
        };
    }

    evil(fn) {
        return new Function('return ' + fn)();
    }

    onHandleClick = txt => {
        const {input} = this.state,
            operators = ['.', '-', '+', '*', '/'],
            lst = input.substr(input.length - 1, input.length)
        ;

        if (operators.includes(txt) && (input == '' || isNaN(lst))) return;

        if (txt == 'Clear') {
            this.setState({
                input: input.slice(0, -1)
            });
            return;
        }

        if (txt == '=') {
            this.setState({
                input: input +'='+ this.evil(input)
            });
            return;
        }

        this.setState({
            input: input + txt
        });
    }

    render () {
        let rows = [],
            lastCol = null
        ;

        NUMBERS.forEach(cont => {
            if (cont.column !== lastCol) {
                lastCol = cont.column;

                rows.push(<tr key={cont.number}><Buttons handleClick={this.onHandleClick} lastColumn={lastCol}/></tr>);
            }
        });

        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th colSpan="4">
                            {this.state.input}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('App'));