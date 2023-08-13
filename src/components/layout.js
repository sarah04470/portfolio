import styled from "@emotion/styled";
import Container from "./container.js"


function Layout(props) {
    // props.children key 존재
    return (
        <>
            <main>
                {props.children}
            </main>
            <Container></Container>
        </>
    );
}

export default Layout;