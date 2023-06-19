import styled from "@emotion/styled";

export const SignInComponent = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SignInput = styled.input`
    width: 400px;
    padding: 15px;
    margin: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`

export const SignButton = styled.button`
    width: 400px;
    padding: 15px;
    margin: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }
`