import React from 'react'
import './home.css'
import Content from '../features/Content'
import InputForm from '../features/InputForm'


const Home = () => {
  return (
    <div className="appContainer">
      <div className='appWrapper'>
            <div className='header'>LISTS TO DO </div>
            <div className='contentHome'>                
                <InputForm className="iContent"/>
                <div className="cContent">
                  <Content />
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home