import React from 'react'

class Forms extends React.Component {
  constructor () {
    super ();
    this.state = {value: ''};
  }
  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state.value);
  }

  handleChange (e) {
    this.setState ({
      value:e.target.value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.value}
              onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" value="Submit" />
          {/* <input type="reset" value="reset" /> */} <br />
        {/* <textarea value={this.state.value} onChange={this.handleChange.bind(this)} /> */}
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        </form>
      </div>
    )
  }
}

export default Forms;
