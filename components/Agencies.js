import 'isomorphic-fetch'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      agencies: []
    }
  }

  render() {
    return <div id="agencies">
      <h2>Most trusted agencies in Stockholm</h2>
      <p>We the brand asked for offers for our Sample Real Project and had an extra round of design fixes - that's our
        way of ranking these agencies.</p>
      {(this.state.agencies && this.state.agencies.length > 0) ?
        <ul>
          {this.state.agencies.map(agency => <li><h3>{agency.name}</h3></li>)}
        </ul> : <p>Have nothing</p>}
      <hr/>
    </div>
  }
}

