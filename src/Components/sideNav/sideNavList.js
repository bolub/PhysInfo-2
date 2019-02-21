import React from 'react';
import Item from './sideNavItem';

const sideNavlist = ()=>{
    return(
        <ul className="nav mt-4 pl-5 d-flex flex-column text-left">
            <Item navItem="Home" toh="/" />
            <Item navItem="Intro to physics" toh="/Intro" />
            <Item navItem="What is Engineering physics" toh="/EPH" />
            <Item navItem="Branches of physics" toh="/branches" />
            <Item navItem="Nuclear physics" toh="/nucPhy" />
            <Item navItem="Medical physics" toh="/medPhy" />
            <Item navItem="Lecturer list" toh="/lecturers" />
        </ul>
    );
}

export default sideNavlist;
