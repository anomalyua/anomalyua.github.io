import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SubscribeWidget = (props) => {
  const { show, closeCallback } = props;
  return (
    <Modal show={show} onHide={closeCallback}>
      <Modal.Body>
        <>
          <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css" />
          <div
            id="mc_embed_signup"
            style={{
              background: '#fff',
              clear: 'left',
              fontSize: 14,
              fontFamily: 'Helvetica,Arial,sans-serif',
            }}
          >
            <form
              onSubmit={() => {
                setTimeout(closeCallback, 1000);
              }}
              action="https://gmail.us14.list-manage.com/subscribe/post?u=a0ca1ca9d25c8ce2af21b277b&amp;id=3c82baf528&amp;f_id=005e82e0f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe to the Chronicles of Russia-Ukraine war</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                  <span id="mce-EMAIL-HELPERTEXT" className="helper_text"> </span>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }}> </div>
                  <div className="response" id="mce-success-response" style={{ display: 'none' }}> </div>
                </div>
                <div
                  style={{ position: 'absolute', left: -5000 }}
                  aria-hidden="true">
                  <input type="text" name="b_a0ca1ca9d25c8ce2af21b277b_3c82baf528" tabIndex="-1" value="" />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    <p className="brandingLogo">
                      <a href="http://eepurl.com/h8lllT" title="Mailchimp - email marketing made easy and fun">
                        <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt=''/>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      </Modal.Body>
    </Modal>
  );
}

export default SubscribeWidget;
