import '../App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Rooms} from "../pages/Rooms";
import {ReserveNow} from "../pages/ReserveNow";
import {Layout} from "../components/Layout";
import { CreateRoom } from '../components/CreateRoom';
import { RoomInfo } from '../pages/Rooms/RoomInfo';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/rooms" component={Rooms}/>
                    <Route path="/create-rooms" component={CreateRoom}/>
                    <Route path="/reserve-now" component={ReserveNow}/>
                    <Route path="/room-info" component={RoomInfo}/>

                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;
