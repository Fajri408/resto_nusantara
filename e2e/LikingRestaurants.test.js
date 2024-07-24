const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.waitForElement('.contentlist a', 10);
  I.seeElement('.contentlist a');

  const firstRestaurant = locate('.info_title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.contentlist');
  const likedRestaurantName = await I.grabTextFrom('.info_title');
  assert.strictEqual(
    firstRestaurantName,
    likedRestaurantName,
  );
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.waitForElement('.contentlist a', 10);
  I.seeElement('.contentlist a');

  const firstRestaurant = locate('.info_title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.contentlist');
  const likedRestaurantName = await I.grabTextFrom('.info_title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.dontSeeElement('.contentlist');
});
