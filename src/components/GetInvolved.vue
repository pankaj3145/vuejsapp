<template>
	<div>
      <a class="skip-link screen-reader-text" href="#content"> Skip to content </a>
      <header class="section section--no-spacing utility-header utility-header--standard" role="banner">
        <div class="container">
          <ul class="utility-header__menu">
            <li class="utility-header__menu-item">
              <a href="#" class="utility-header__menu-link utility-header__menu-link--search" aria-labelledby="utility-header-label" role="button">
                <svg aria-hidden="true" class="icon utility-header__menu-icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <g fill="currentColor">
                    <path d="M15.055 30.391a15.034 15.034 0 1110.627-4.403 14.936 14.936 0 01-10.627 4.403zm0-25.743a10.706 10.706 0 107.56 3.135 10.638 10.638 0 00-7.56-3.135z"></path>
                    <path d="M33.44 35.906a2.16 2.16 0 01-1.526-.633l-9.284-9.285a2.16 2.16 0 013.052-3.056l9.288 9.288a2.16 2.16 0 01-1.53 3.686z"></path>
                  </g>
                </svg>
                <span id="utility-header-label" class="utility-header__menu-label"> Search </span>
              </a>
            </li>
            <li class="utility-header__menu-item">
              <a  class="utility-header__menu-link utility-header__menu-link--secondary-action">
                <span class="utility-header__menu-label"> Learn </span>
              </a>
            </li>
            <li class="utility-header__menu-item">
              <a  class="utility-header__menu-link utility-header__menu-link--main-action">
                <span class="utility-header__menu-label"> Donate </span>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div id="search-site-overlay" class="search-overlay" role="dialog" aria-hidden="true" aria-labelledby="search-site-overlay-label" aria-describedby="search-site-overlay-text">
        <button class="search-overlay__close-btn btn btn--secondary" type="button">
          <span>Close</span>
          <svg aria-hidden="true" class="icon close-button-icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
              <path d="M3.111 35.724a2.667 2.667 0 01-1.884-4.55l30-30a2.667 2.667 0 113.769 3.768l-30 30c-.5.5-1.178.782-1.885.782z"></path>
              <path d="M33.102 35.724a2.667 2.667 0 01-1.884-.782l-30-30a2.667 2.667 0 113.769-3.769l30 30a2.667 2.667 0 01-1.885 4.551z"></path>
            </g>
          </svg>
        </button>
        <div class="search-overlay__form">
          <div class="container">
            <h2 id="search-site-overlay-label"> Search </h2>
            <p id="search-site-overlay-text"> I'm looking for... </p>
            <form class="search-form-global" action="/" method="get">
              <label class="screen-reader-text" for="search"> Your search term </label>
              <input type="text" name="s" id="search" value="">
              <input type="submit" class="btn btn--primary" value="Search" disabled="disabled">
            </form>
          </div>
        </div>
      </div>
      <header class="section section--separated section--no-spacing standard-header standard-header--standard" role="banner">
        <div class="container">
          <a class="standard-header__logo-link"> 
            <img src="https://i.stack.imgur.com/7JLVA.png" alt="Good Things Foundation" class="standard-header__logo">lorem ipsum
          </a>
          <button class="btn btn--primary standard-header__menu-button" aria-expanded="false" aria-controls="mobile-menu">
            <svg aria-hidden="true" class="icon standard-header__menu-icon" width="46" height="36" viewBox="0 0 46 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.923 5.755H2.77a2.77 2.77 0 010-5.538h40.154a2.77 2.77 0 010 5.538zM35.146 20.77H2.77a2.77 2.77 0 010-5.54h32.386a2.77 2.77 0 010 5.54h-.009zM23.33 35.783H2.77a2.77 2.77 0 110-5.538h20.57a2.77 2.77 0 110 5.538h-.01z" fill="currentColor"></path>
            </svg>
            <span class="standard-header__menu-text">Menu</span>
          </button>
          <nav class="standard-header__nav" role="navigation">
            <ul id="montere-desktop-menu" class="standard-header__menu">

              <li id="menu-item-28" class="              menu-item menu-item-type-post_type menu-item-object-page menu-item-30 standard-header__menu-item">
                <router-link class="standard-header__menu-link" aria-current="page" to="/">
                  <span>Home</span>
                </router-link>
              </li>
              <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14 ">
                <router-link class="standard-header__menu-link" aria-current="page" to="/Whatwedo">
                  <span>What we do</span>
                </router-link>
              </li>
              <li id="menu-item-88" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88 standard-header__menu-item ">
                <router-link class="standard-header__menu-link" to="/digitaldivide">
                  <span>The digital divide</span>
                </router-link>
              </li>
              <li id="menu-item-1297" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1297 standard-header__menu-item current_page_item menu-item-28 standard-header__menu-item">
                <router-link class="standard-header__menu-link" to="/GetInvolved">
                  <span>Get involved</span>
                </router-link>
              </li>
              <li id="menu-item-16609" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16609 standard-header__menu-item">
                <router-link class="standard-header__menu-link" to="/Network">
                  <span>The network</span>
                </router-link>
              </li>
              <li id="menu-item-547" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-547 standard-header__menu-item">
                <router-link class="standard-header__menu-link" to="/Insights">
                  <span>Insights</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div id="mobile-menu" class="mobile-menu-overlay" role="dialog" aria-hidden="true" aria-label="Navigation menu">
        <div class="mobile-menu-overlay__container" role="document">
          <button class="mobile-menu-overlay__close-button btn btn--secondary" aria-label="Close navigation menu" type="button">
            <span>Close</span>
            <svg aria-hidden="true" class="icon close-button-icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <path d="M3.111 35.724a2.667 2.667 0 01-1.884-4.55l30-30a2.667 2.667 0 113.769 3.768l-30 30c-.5.5-1.178.782-1.885.782z"></path>
                <path d="M33.102 35.724a2.667 2.667 0 01-1.884-.782l-30-30a2.667 2.667 0 113.769-3.769l30 30a2.667 2.667 0 01-1.885 4.551z"></path>
              </g>
            </svg>
          </button>
          <ul id="montere-mobile-menu" class="standard-header__mobile-menu container">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14 current_page_item menu-item-28 standard-header__menu-item standard">
              <a aria-current="page" class="standard-header__menu-link">Home</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 standard-header__menu-item standard">
              <a  class="standard-header__menu-link">What we do</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88 standard-header__menu-item standard">
              <a  class="standard-header__menu-link">The digital divide</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1297 standard-header__menu-item standard">
              <a  class="standard-header__menu-link">Get involved</a>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16609 standard-header__menu-item standard">
              <a  class="standard-header__menu-link">The network</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-547 standard-header__menu-item standard">
              <a  class="standard-header__menu-link">Insights</a>
            </li>
            <li class="standard-header__menu-item mobile-menu-overlay__header-link">
              <a  class="mobile-menu-overlay__button btn btn--bright"> Learn </a>
            </li>
          </ul>
        </div>
      </div>
  <section class="section section--separated background--4 cta-cards cta-cards__dark">
	<div class="container">
					<div class="cta-cards__title">
	<h2 class="medium">
		Get Involved	</h2>
			</div>	
		
	</div>
</section>  
</div>
</template>

<script>
export default {
  name: "MyAbout",
};
</script>
