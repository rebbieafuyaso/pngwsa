import { useState } from 'react';
import Styles from './MissionStatement.module.css';
import { Lightbulb, Pin, Rocket } from 'lucide-react';

function MissionStatement() {
  const [missionStatements, setMissionStatements] = useState(
    [
      {
        id: 1,
        title: 'Vision',
        text: 'To be a united and dynamic community that empowers PNG students in Wuhan to exec acedmically, celebrate cultural heritage and become future leaders.',
        icon: <Lightbulb />
      },
      {
        id: 2,
        title: 'Mission',
        text: "To support the hostilic development of PNG students in Wuhan through acedemic collaboration, collaboration, cultural exchange, welfare assistance, and networking opportunitieswhile promoting Papua New Guinea's identity and values in china",
        icon: <Rocket />
      },
      {
        id: 3,
        title: 'Main Objective',
        text: 'To create a support system that enhances the educational and cultural experience of PNG students in Wuhan, fostering their success and strenghtening ties between PNG and China',
        icon: <Pin />
      }
    ]
  );

  return(
    <>
      <div className={Styles.missionStatementContainer}>
        {missionStatements.map((missionStatement) => {
          return(
            <div className={Styles.cards} key={missionStatement.id}>
            <h3>{missionStatement.title}</h3>
            <i>
              {missionStatement.icon}
            </i>
            <p>{missionStatement.text}</p>
          </div>
          )
        })}
      </div>
    </>
  )
}
export default MissionStatement;