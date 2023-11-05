import React from 'react'
import Footer from './Footer'
import Cards from './Cards'

const Header = () => {
  return (
    
    <div>
      <section id="page">
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
            <div className="container overflow-hidden text-center">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3">
                    <div className="col-md-6 p-lg-5 mx-auto my-5">
                      <h1 className="display-3 fw-bold">Travel Tally</h1>
                      <h3 className="fw-normal text-muted mb-3">
                        Your Journey, Your Budget, Your way
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3"></div>
              </div>
            </div>
          </div>
        </section>
        <Cards/>
    </div>
  )
}

export default Header
