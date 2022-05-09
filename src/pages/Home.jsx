import assembly from '../components/imgs/pic.png';

const Home = () =>{
    return (
        <>
            <div className="row m-0">
              <div className="col-6 h-50 p-5 d-flex justify-content-center">
                <div className='p-md-3 w-100'>
                  <div className="d-flex justify-content-between "> 
                    <h1>
                      <span className="badge border border-primary p-2 text-black">Your &nbsp;
                        <span className="badge bg-primary">Right</span>
                      </span>
                    </h1>
                    
                  </div>
                  <h3 className='lobstar'>Future is in your finger</h3>
                  <h3 className='text-end'>Go for Vote</h3>
                  <h2 className='text-end'>
                      <span className="badge bg-t-primary border border-success">Your &nbsp;
                        <span className="badge bg-primary">Choice</span>
                      </span>
                  </h2>
                </div>
              </div>
              <div className="col-6 h-50">
                <img src={assembly} alt="assembly" className='img-fluid'/>
              </div>
            </div>
        </>
    )
  }
export default Home;