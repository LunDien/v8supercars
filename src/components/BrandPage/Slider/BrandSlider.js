import ReactPlayer from 'react-player'
import styled from './BrandSlider.module.scss'
import { useStore } from '../../Store'
import clsx from 'clsx'

function BrandSlider() {
    const [state] = useStore()
    const classContent = clsx(styled.captionContent, "animate__pulse", "animate__animated", "animate__slower", "animate__infinite")
    

    
    return (
        <>
            {state.videos?.map((video, index) => video.brand.toLowerCase().split('-').join('') === state.brand &&
                <div key={index} className={styled.wrapper}>
                    <ReactPlayer 
                    className={styled.video}
                    url={video.videoURL} 
                    playing={true}
                    volume={0}
                    width="100%"
                    playbackRate={1.2}
                    height="calc(100vh - calc(var(--header-height) + var(--headerSub-height)))"
                    loop={true}
                    config={{
                        youtube: {
                            playerVars: {
                                showinfo: 0,
                                origin: "https://localhost:3000"
                    
                            }

                        }
                    }}
                    />  
                    <div className={styled.caption}>
                    <div className={styled.captionHeader}>COMING SOON</div>
                    <div className={classContent}>{video.name}</div>
                    </div>
                    <div className={styled.overlay}></div>
                </div>
            )}
        </>
            
    )
}

export default BrandSlider
