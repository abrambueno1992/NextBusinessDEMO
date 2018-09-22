import Link from 'next/link'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
// import Agencies from '../components/Agencies'
import Information from '../components/Information'
import { loadFirebase } from "../lib/db";
import 'isomorphic-fetch'
class Index extends React.Component {
  static async getInitialProps() {

    let firebase = await loadFirebase()
    // let db = firebase.firestore()
    // const settings = { timestampsInSnapshots: true };
    // firebase.firestore().settings(settings);
    let data = []


    let result = await new Promise((resolve, reject) => {
      firebase.firestore().collection('Agencies')
        .limit(10)
        .get()
        .then(snapshot => {
          let split = snapshot
          snapshot.forEach((doc, i, all) => {
            data.push(
              Object.assign({
              id: doc.id
            }, doc.data())
            )
          })
          resolve(data)
        })
        .catch(err => {
          console.log('Error error', err)
          reject([])
        })
    })
    return {agencies: result }
  }
  render() {
    const agencies = this.props.agencies
    return <Layout>
      <Hero />
      <div id="agencies">
        <h2>Most trusted agencies in Stockholm</h2>
        <p>We the brand asked for offers for our Sample Real Project and had an extra round of design fixes - that's our
            way of ranking these agencies.</p>
        {(agencies && agencies.length > 0) ?
          <ul>
            {agencies.map(agency => <li key={agency.id}><h3>{agency.name} has a ranking of <em>{agency.ranking}</em></h3></li>)}
          </ul> : <p><strong>Have nothing</strong></p>}
        <hr />
      </div>
      <Information />

    </Layout>

  }
}



export default Index
