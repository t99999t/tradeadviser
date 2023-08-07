function  Error(content){



    return(<div className={'Error'}>
            <div className={'Error-content'}>
                <p>Error Notification</p>
                {content}
            </div>
        </div>
    )
}
export  default Error