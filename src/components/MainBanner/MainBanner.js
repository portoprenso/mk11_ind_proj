import React from 'react';
import './MainBanner.css'


const MainBanner = () => {
    return (
        <div className="main-banner-container">
            <video autoplay="autoplay" muted="muted" loop="loop" playsInline="" className="bgVideo">
                <source src="https://cdn-prod.mortalkombat.com/ultimate/home/featured/ultimate.mp4"
                        type="video/mp4" />
            </video>
            {/*<div className="content"><img src="https://cdn-prod.mortalkombat.com/ultimate/mk-ultimate-logo.png"*/}
            {/*                              alt="" className="logo img-fluid">*/}
            {/*    <div className="ctas">*/}
            {/*        <div className="scale-in"><a href="http://www.mortalkombat.com/purchase"*/}
            {/*                                     className="purchase btn btn-black" tabIndex="0">*/}
            {/*            <div className="label"><span data-text="купить сейчас"><span>купить сейчас</span></span>*/}
            {/*                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"*/}
            {/*                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"*/}
            {/*                     className="svg-inline--fa fa-caret-right fa-w-6">*/}
            {/*                    <path fill="currentColor"*/}
            {/*                          d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"*/}
            {/*                          className=""></path>*/}
            {/*                </svg>*/}
            {/*            </div>*/}
            {/*        </a></div>*/}
            {/*        <div itemScope="itemscope" itemType="http://schema.org/ImageGallery"*/}
            {/*             className="gallery scale-in" data-pswp-uid="2">*/}
            {/*            <figure itemProp="associatedMedia" itemScope="itemscope"*/}
            {/*                    itemType="http://schema.org/VideoObject" className="video-thumb">*/}
            {/*                <button data-href="#" itemProp="contentUrl" data-size="1280x720" data-type="video"*/}
            {/*                        data-track-page="home" data-track-caption="announce trailer (hero)"*/}
            {/*                        data-track-id="1oA3b8xZZA4" data-video="*/}
            {/*   <div class=&quot;media-wrapper&quot;>*/}
            {/*       <div class=&quot;video-wrapper embed-responsive embed-responsive-16by9&quot;>*/}
            {/*           <iframe class=&quot;pswp__video embed-responsive-item&quot;*/}
            {/*           width=&quot;1280&quot; height=&quot;720&quot;*/}
            {/*           src=&quot;https://www.youtube-nocookie.com/embed/1oA3b8xZZA4?rel=0&amp;autoplay=1&amp;enablejsapi=1&amp;hl=ru-RU&amp;origin=https://www.mortalkombat.com&amp;showinfo=0&quot;*/}
            {/*           frameborder=&quot;0&quot; allowfullscreen></iframe>*/}
            {/*       </div>*/}
            {/*   </div>" className="btn btn-black" tabIndex="0">*/}
            {/*                    <div className="label"><span*/}
            {/*                        data-text="Смотреть трейлер"><span>Смотреть трейлер</span></span>*/}
            {/*                        <svg aria-hidden="true" focusable="false" data-prefix="fas"*/}
            {/*                             data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                             viewBox="0 0 192 512" className="svg-inline--fa fa-caret-right fa-w-6">*/}
            {/*                            <path fill="currentColor"*/}
            {/*                                  d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"*/}
            {/*                                  className=""></path>*/}
            {/*                        </svg>*/}
            {/*                    </div>*/}
            {/*                    <img src="https://cdn-prod.mortalkombat.com/static/pixel.png"*/}
            {/*                         itemProp="thumbnail" alt="Click to watch the video" className="img-fluid " />*/}
            {/*                </button>*/}
            {/*                <figcaption itemProp="caption description " className="d-none"><span>Mortal Kombat 11: Ultimate – трейлер Боевого набора 2</span>*/}
            {/*                </figcaption>*/}
            {/*            </figure>*/}
            {/*        </div>*/}
            {/*    </div></div>*/}
        </div>
    );
};

export default MainBanner;