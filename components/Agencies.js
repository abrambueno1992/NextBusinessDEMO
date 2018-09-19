import 'isomorphic-fetch'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      agencies: [

      ]
    }
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const agencies = await response.json()
    this.setState({agencies})
  }


  render() {
    return
  }
}

