$(function() {

    describe('RSS Feeds', function() {
        /* it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* check there's a URL or not   */
        it('url defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe(0);
            });
        });

        /* check there's a name or not   */
        it('name is defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              expect(feed.name).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
      // test to check default hidden menu
        it('check that Nav is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        // test after clicking on the mainpage
         it('check the nav is hidden after clicking outsite nav', function() {
             $('.feed-list').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         // test after clicking on the nav
         it('check the nav is visible after clicking on the icon', function() {
            $('.menu-icon-link').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(false);
         });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        // test check the  elements added to the page
        it('check the initial feed exis', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    describe('New Feed Selection', function() {
        var initialFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });
        // test check the new elements added
        it('matching the intial with the newer', function() {
            expect($('.feed').html()).not.toEqual(initialFeed);
        });
    });

}());
