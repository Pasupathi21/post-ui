import React, { useState, useRef, CSSProperties, useEffect, memo } from 'react'
import { Play, Pause, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { COLOR } from '@/data/color.const';
import './videoplayer.module.css'

interface IVideoplayer {
    file: Record<string, any>;
    vControls: Record<string, any>
}

function Videoplayer({
    file,
    vControls
}: IVideoplayer) {
    const vps = {
        container: {
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'center',
            width: '80%'
            /* overflow: hidden; */
        },
        playerContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '5em',
            borderRadius: '1em',
            overflow: 'hidden'
        },
        videoPlayer: {
            borderRadius: '1em',
            zIndex: -1
        },
        controlsContainer: {
            marginTop: '-3.5em'
        },
        controls: {
            display: 'flex',
            zIndex: 1,
            color: 'white',
            width: '200px',
            justifyContent: 'space-between',
        },
        controlButton: {
            border: 'none',
            background: 'none'
        },
        timeline: {
            width: '100%',
            backgroundColor: "#9BEC00"
        },
        duration: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        'controlButton:hover': {
            cursor: 'pointer'
        }
    } as Record<string, CSSProperties>;
    const videoRef = useRef<null | any>(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState([0, 0]);
    const [currentTimeSec, setCurrentTimeSec] = useState();
    const [duration, setDuration] = useState([0, 0]);
    const [durationSec, setDurationSec] = useState();

    const sec2Min = (sec: number) => {
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        return {
            min: min,
            sec: secRemain
        };
    };

    useEffect(() => {
        const { min, sec } = sec2Min(videoRef.current.duration);
        setDurationSec(videoRef.current.duration);
        setDuration([min, sec]);

        console.log(videoRef.current.duration);
        const interval = setInterval(() => {
            const { min, sec } = sec2Min(videoRef.current.currentTime);
            setCurrentTimeSec(videoRef.current.currentTime);
            setCurrentTime([min, sec]);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handlePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div style={vps.container} className='bg-yello-400'>
            <div style={vps.playerContainer}>
                <video src={file.url} ref={videoRef} autoPlay={vControls?.autoPlay || false} />
                <div style={vps.controlsContainer}>
                    <div style={vps.controls}>
                        <div>
                            <ChevronsLeft />
                        </div>
                        <div onClick={handlePlay}>
                            {
                                isPlaying ? <Pause /> : <Play />
                            }
                        </div>
                        <div>
                            <ChevronsRight />
                        </div>
                        <div style={vps.duration}>
                            {currentTime[0]}:{currentTime[1]} / {duration[0]}:{duration[1]}
                        </div>
                    </div>
                    <div className='p-2'>
                        <input type="range" min={0} max={durationSec} defaultValue={0} style={vps.timeline} value={currentTimeSec} onChange={(e) => videoRef.current.currentTime = e.target.value} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videoplayer