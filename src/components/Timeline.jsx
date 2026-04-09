import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent} from '@mui/lab'
import Styles from './Timeline.module.css';

export const TimeLine = () => {
  return(
    <div className={Styles.timelineContainer}>
      <h2>Milestones in PNG Wuhan Students' Association</h2>
    <Timeline position='alternate' className={Styles.timeline}>
      <TimelineItem>
        <TimelineOppositeContent>
          <div className={Styles.timelineHeading} >
            <p className={Styles.headingText}>2014 – Foundation</p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <p className={Styles.littleText}>The PNG Wuhan Students Association was officially established to unite Papua New Guinean students in Wuhan.</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <div className={Styles.timelineHeading} >
            <p className={Styles.headingText}>2016 – Formal Organization</p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <p className={Styles.littleText}>The association established its leadership structure and began organizing consistent student activities.</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <div className={Styles.timelineHeading} >
            <p className={Styles.headingText}>2020 – COVID-19 Response</p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <p className={Styles.littleText}>Provided critical support, coordination, and communication for members during the Wuhan lockdown.</p>
          </div>
        </TimelineContent>
      </TimelineItem>
            <TimelineItem>
        <TimelineOppositeContent>
          <div className={Styles.timelineHeading} >
            <p className={Styles.headingText}>2024 – 10-Year Anniversary</p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <p className={Styles.littleText}>Marked a decade of community, growth, and continued support for PNG students abroad.</p>
          </div>
        </TimelineContent>
      </TimelineItem>      <TimelineItem>
        <TimelineOppositeContent>
          <div className={Styles.timelineHeading} >
            <p className={Styles.headingText}>2025 – Global Alumni Network</p>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <p className={Styles.littleText}>Expanded into a broader network connecting both current students and alumni worldwide.</p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  )
}
