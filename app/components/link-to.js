import LinkComponent from "@ember/routing/link-component";
import { set } from "@ember/object";

export default class LinkTo extends LinkComponent {
  didReceiveAttrs() {
    set(this, "route", this.route + ".whomp");
  }
}
