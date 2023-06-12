import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coin from "./routes/Coin"
import Coins from "./routes/Coins"

function Router(){
    return<BrowserRouter>
        <Switch>
        {/* 뭔지모르겠지만 {`${process.env.PUBLIC_URL}/`} 입력하니 deploy한 다음 메인페이지 url 못잡던게 해결됨 */}
            <Route path={`${process.env.PUBLIC_URL}/`}> 
                <Coins />
            </Route>
            <Route path={"/:coinId"}>
                <Coin />
            </Route>
        </Switch>
    </BrowserRouter>
}
export default Router;