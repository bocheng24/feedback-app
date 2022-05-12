import styled from 'styled-components'

export const RatingsWrapper = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 15px;
    justify-content: center;
    align-items: center;
    align-items: center;
    margin: 30px 0 40px;

    li {
        position: relative;
        background: #f4f4f4;
        width: 35px;
        height: 35px;
        padding: 10px;
        text-align: center;
        border-radius: 50%;
        font-size: 19px;
        border: 1px #eee solid;
        transition: 0.3s;
        transition: background color 0.15s;
    }

    li:hover,
    .isSelected {
        background: #ff6a95;
        color: #fff;
    }

    label {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 35px;
        height: 35px;
        padding: 10px;
        border-radius: 50%;
        transform: translate(-48%, -41%);
        cursor: pointer;
    }

    input[type="radio"] {
        opacity: 0;
    }
`