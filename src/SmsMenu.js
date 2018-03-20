import React from 'react'
import './SmsMenu.css'

class SmsMenu extends React.Component {
  constructor() {
    super();
    this.state = {
        message: 'Hi, I can add up to 3 SMS of text here.',
        numbers: null,
    }
  }

  render() {
    return (
      <form>
        <div className='sms-menu form-entries'>
          <p className='instruction form-entries' >SEND A MESSAGE</p>
          <p className="form-entries">
            <label className='input-label'>TO:
              <input type="text" name="numbers" className='single-line-input' value={this.state.numbers} />
            </label>
          </p>
          <p className="form-entries">
          <label className='input-label'>MESSAGE:
            <textarea type="textarea" name="message" className="multi-line-input" value={this.state.message} />
          </label>
        </p>
        <p className="form-entries">
          <input type='submit' value='SEND' className='action-button' />
        </p>
        </div>
      </form>
    )
  }

  componentDidMount() {
  }
}

export default SmsMenu;
