import styled from 'styled-components'


// colors
export const colors = {
    main: 'indigo',
    middle: 'hotpink',
    dark: 'black',
    light: 'grey',
};

// images, logos, videos
export const imgs = {
    bg: 'https://i.imgur.com/ZOOjgzh.jpg'
};

// annimations - use keyframes

export const Gallery = styled.section`
    background-image: ${imgs.bg};
    color: ${colors.light};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 5px solid black;
    `;

export const Card = styled.div`
    background-color: ${colors.main};
    color: ${colors.middle};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 150px;
    border: 2px solid ${colors.light};
    margin: 25px;
    `;

export const Nav = styled.h1`
    background-color: ${colors.dark};
    color: ${colors.main};
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;




