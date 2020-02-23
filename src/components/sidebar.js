import React from "react"
import Avatar from './avatar';
const SideBar = () => (
  <div className='side-bar'>
    <div className='avatar-container'>
      <Avatar
        alText='Vicente Montaño Mena'
        title='Vicente Montaño Mena'
        user='vicmonmena' />
    </div>
    <h3>About me</h3>
    <h3>Contact me</h3>
    <h3>Follow me</h3>
  </div>
)

export default SideBar
