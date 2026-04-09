import { useState } from 'react';
import Styles from './MissionStatement.module.css';

function MissionStatement() {
  const [missionStatements, setMissionStatements] = useState(
    [
      {
        id: 1,
        title: 'Vision',
        text: 'To be a united and dynamic community that empowers PNG students in Wuhan to exec acedmically, celebrate cultural heritage and become future leaders.'
      },
      {
        id: 2,
        title: 'Mission',
        text: "To support the hostilic development of PNG students in Wuhan through acedemic collaboration, collaboration, cultural exchange, welfare assistance, and networking opportunitieswhile promoting Papua New Guinea's identity and values in china"
      },
      {
        id: 3,
        title: 'Main Objective',
        text: 'To create a support system that enhances the educational and cultural experience of PNG students in Wuhan, fostering their success and strenghtening ties between PNG and China'
      }
    ]
  );

  return(
    <>
      <div className={Styles.MissionStatementContainer}>
        {missionStatements.map((missionStatement) => {
          return(
            <div className={Styles.cards} >
            <h3>{missionStatement.title}</h3>
            <p>{missionStatement.text}</p>
          </div>
          )
        })}
      </div>
    </>
  )
}
export default MissionStatement;