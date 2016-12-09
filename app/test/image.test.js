describe('images component', () => {
  const {assert} = chai;

  beforeEach(angular.mock.module('components'));

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const images = [
      {url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Bunny_in_zoo_cropped.jpg', imageTitle: 'Fluffy the bunny', imageDescription: 'This is a close up photo of a little bunny.'}
    ];

    const imageService = {
      get() {
        return Promise.resolve(images);
      }
    };

    const component = $component('images', {imageService});

    it('loads images', done => {

      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

  });

});
