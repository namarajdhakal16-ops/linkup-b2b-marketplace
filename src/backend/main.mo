import Map "mo:core/Map";
import List "mo:core/List";

import UsersLib "lib/users";
import ProductsLib "lib/products";
import RFQsLib "lib/rfqs";
import FeedbackLib "lib/feedback";

import UsersMixin "mixins/users-api";
import ProductsMixin "mixins/products-api";
import RFQsMixin "mixins/rfqs-api";
import FeedbackMixin "mixins/feedback-api";
import PricingMixin "mixins/pricing-api";

actor {
  // Users state
  let usersState : UsersLib.State = {
    users = Map.empty();
    var nextId = 0;
  };
  include UsersMixin(usersState);

  // Products state
  let productsState : ProductsLib.State = {
    products = List.empty();
    var nextId = 0;
  };
  include ProductsMixin(productsState);

  // RFQs state
  let rfqsState : RFQsLib.State = {
    rfqs = List.empty();
    var nextId = 0;
  };
  include RFQsMixin(rfqsState);

  // Feedback state
  let feedbackState : FeedbackLib.State = {
    feedbacks = List.empty();
    var nextId = 0;
  };
  include FeedbackMixin(feedbackState);

  // Pricing (stateless)
  include PricingMixin();
};
