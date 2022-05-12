import styled from 'styled-components'

export const FormWrapper = styled.div`
    margin-top: 35px;
    color: #000;
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
    padding: 25px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    
    h3 {
        margin-bottom: 15px;
    }

    form {
        // width: 80%;
        padding: 10px 12px;
        border: 1.2px #bdc3c7 solid;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input {
        border: none;
        background: none;
        outline: none;
        color: #333;
        width: 100%;
        padding-right: 15px;
    }


    .btn {
        background: none;
        border: none;
        padding: 10px 15px;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.15);
    }

    .btn-inline {
        // margin-left: -75px;

    }

    .btn-feedback {
        background-color: #3498db;
        transition: all 0.3s;
    }
    
    .btn-feedback:hover {
        background-color: #2980b9;
    }

    .btn-disable {
        background-color: #718093;
        cursor: not-allowed;
    }

    .message {
        margin-top: 15px;
        font-size: 0.85rem;
        letter-spacing: 0;
        color: #e85598;
    }
`