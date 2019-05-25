import React, { Component } from 'react';


class IpsumForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.changeChar(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeIpsumText();
  }

	render() {
		return (
    <div>
      <form onSubmit={this.handleSubmit} >
        <select
          onChange={this.handleChange}
          name="character"
          className="form-control col-9"
          >
          <option value="daria">Daria</option>
          <option value="quinn">Quinn</option>
          <option value="jane">Jane</option>
          <option value="jake">Jake</option>
          <option value="helen">Helen</option>
          <option value="mrOneill">Mr. O'Neill</option>
          <option value="mrDeMartino">Mr. DeMartino</option>
          <option value="tom">Tom</option>
        </select>
        <button>Get Ipsum!</button>
      </form>
    </div>
    );
	}
}

export default IpsumForm;
