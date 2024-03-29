import React, {useState} from 'react'
import LiveMessages from './LiveMessages.js'
import ScheduledMessages from './ScheduledMessages'
import './coachMessaging.scss'

const CoachMessaging = (props) => {
    const {clientprofile} = props
    const [type, setType] = useState(1)
    



    return (
        <>
        <div className= 'message-header'>
        <div className ={`${type=== 2 ?'live-message' : 'active' } ` } active={type === 1} left
                onClick={() => {setType(1)
                
                
                
                }
                 
                }>
            <h1>
                LiveMessages
            </h1>

        </div>
 
            
        <div className={`${type=== 1 ?'scheduled-message' : 'active' } ` } 
         onClick={() => {setType(2)
        
            // toggleactive()        
        }}
        active={type === 2}
        >
        <h1>
                Scheduled a Message
        </h1>
        </div>
        </div>
            {(() => {

                switch (type) {
                    case 1:
                        return <LiveMessages clientprofile={clientprofile}/>
                    case 2:
                        return <ScheduledMessages/>
                    default:
                        return <LiveMessages />
                }
            })()} 
        </>
    )
}

export default CoachMessaging
