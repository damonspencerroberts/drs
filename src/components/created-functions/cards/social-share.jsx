import React, { Component, Fragment } from 'react';
import { FacebookShareButton, 
    FacebookIcon,
    LinkedinIcon, 
    TwitterIcon, 
    WhatsappIcon,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton } from "react-share";

export default class SocialShare extends Component {
    constructor() {
        super()

        this.state = {
            showShare: false
        }
        this.handleShare = this.handleShare.bind(this);
    }

    handleShare() {
        this.setState({showShare: !this.state.showShare});
    }

    render() {
        const shareUrl = 'https://drs-website.herokuapp.com/';
        const title = 'DRS Website | Damon Roberts Freelance';

        return <div>

            <div onClick = {this.handleShare} className="social-share-btn share">
                <i className="fas fa-share-alt fa-1x share-btn"></i>
            </div>

            {this.state.showShare === true ? <Fragment><div className="social-share-btn face">
                <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="social-share-btn__share-button"
                >
                <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className="social-share-btn linked">
            <LinkedinShareButton url={shareUrl} className="social-share-btn__share-button">
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            </div>

            <div className="social-share-btn twit">
            <TwitterShareButton
                url={shareUrl}
                title={title}
                className="social-share-btn__share-button"
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            </div>

            <div className="social-share-btn whats">
            <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="social-share-btn__share-button"
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            </div></Fragment> : null}
        </div> 
    }
}
    

