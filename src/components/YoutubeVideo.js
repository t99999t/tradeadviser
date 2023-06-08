
import YouTube, { YouTubeProps } from 'react-youtube';



function YouTubeVideo(){


    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

        const opts: YouTubeProps['opts'] = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                playsinline: 1,
                rel: 0,
                showinfo: 0,
                start: 0,
                wmode: 'opaque',
                // https://developers.google.com/youtube/player_parameters
                theme: 'light'
            },
        };





        
    return (
 <>

 <div className="content">
 <div className="row">
                    <div className="col-md-12"> <h2> YouTube Watch</h2>
 <div className="embed-responsive embed-responsive-16by9">
<YouTube                                videoId="5g851Eo7K8U" 
 opts={opts}
 onReady={onPlayerReady}/>

</div>
</div>
</div>
</div>
</>
  );
 }
export default YouTubeVideo;