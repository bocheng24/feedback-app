import styled from 'styled-components'

export const CardBox = styled.div`
    margin-top: 35px;
    padding: 20px 35px 35px 45px;
    background-color: #fff;
    border-radius: 15px;
    color: #000;
    width: 85%;

    h3 {
        margin-bottom: 20px;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: -12px;
        margin-bottom: 20px;
    }

    div p {
        background-color: #e85598;
        color: #fff;
        width: 20px;
        height: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #fff;
        margin-top: -20px;
        margin-left: -60px;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        margin-right: -12px;
    }

    p {
        font-size: 0.9rem;
        font-weight: 500;
        max-width: 95%;
        line-height: 1.35;
    }

`