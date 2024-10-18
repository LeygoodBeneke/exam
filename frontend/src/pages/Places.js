import {Component} from "react";

// import Item from "../Components/Item";
import Place from "../Components/Place";
import Header from "../function/Header";
// import items from "./items";
// import Login from "../Components/Login";
// import {Navigate} from "react-router-dom";
class Places extends Component{

    // const [items, setItems] = useState([]);
    //
    // useEffect(() => {
    //     fetch('/items')
    //         .then(response => response.json())
    //         .then(data => setItems(data))
    // }, []);

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            logData: [],
            login: {
                token: "",
                tokenType: ""
            }
        }
    }

    componentDidMount() {
        this.fetchData();
        this.fetchData1();
        // this.navigation.navigate('/login');
    }

    fetchData = async () => {
        try {
            const response = await fetch('/place');
            const jsonData = await response.json();
            this.setState({ items: jsonData });
            // console.log(items)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData1 = async () => {
        try {
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ username: 'Vasya_0001', password: "QWEQWEQWEQWE" })
            // };
            //
            // const response1 = await  fetch("/api/auth/login", requestOptions)
            // const data = await response1.json();
            // localStorage.setItem("user", data.tokenType + data.token);

            //this.setState({ logData: data });

            if (localStorage.getItem("user") !== null) {
                const headers = { 'Authorization': localStorage.getItem("user") };
                const response = await fetch('/thing', {headers});
                const jsonData = await response.json();
                this.setState({ logData: jsonData });
                console.log(jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // const toBasket = (itemId) => {
    //
    // }

    render() {
        return (
            <div>
                <Header />
                <div className="Places">
                    {
                            this.state.items.map((it) => {
                                return <Place key={it.id} place={it} onAdd={this.props.onAdd} />
                            })
                    }
                </div>
            </div>
        );
    }
}

export default Places;