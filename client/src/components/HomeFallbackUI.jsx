import './styles/HomeFallbackUI.css';


const HomeFallbackUI = () => {
    return (
        <div className='home-fallback-ui-container'>
            {
                Array(8).fill("").map((e, index) => (
                    <div className="home-fallback-ui-card" key={index}>
                    <div className="home-fallback-ui-image">
                        
                    </div>
                        <div className="home-fallback-ui-content">

                        </div>
                        <div className="home-fallback-ui-button">

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HomeFallbackUI;