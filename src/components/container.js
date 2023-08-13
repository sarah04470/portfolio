import Header from "./header.js"
import Main from "./main.js"

const Container = () => {
    return(
        <div className="container">
            <Header></Header>
            <Main></Main>
        </div>
    );
}

export default Container;

// 현재 div 를 Container props 로 바꾸기