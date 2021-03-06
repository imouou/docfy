import Route from '@ember/routing/route';
import output from '@docfy/ember/output';

export default class Docs extends Route {
  model() {
    return output.nested.children.find((item) => {
      return item.name === 'docs';
    });
  }
}
