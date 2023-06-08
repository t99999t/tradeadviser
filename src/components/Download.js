

export default function Download(){
    return(
        <div>
            <h1>Download</h1>

            <div className="download">
                <a href="https://drive.google.com/uc?export=download&id=0Bz-k0000000Bz-k00000000Bz-k00000000Bz-k00000000Bz-k00000000Bz-k00000000Bz-k000
                " target="_blank" rel="noreferrer">
                    <button
                    className="btn btn-primary"
                    onClick={
                        () => {
                            window.open("https://drive.google.com/uc?export=download&id=0Bz-k00000000Bz-k00000000Bz-k00000000Bz-k00000000Bz-k00000000Bz-k00000000Bz-k00")
                        

                            
                        }
                    }
                    >Download</button>
                </a>
            </div>

            

        </div>
    )
}