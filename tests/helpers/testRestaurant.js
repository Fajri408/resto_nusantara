import LikeButtonInitiator from '../../src/scripts/utils/favorit-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
