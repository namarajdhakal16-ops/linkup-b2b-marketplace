import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import FeedbackLib "../lib/feedback";
import FeedbackTypes "../types/feedback";
import Common "../types/common";

mixin (
  feedbackState : FeedbackLib.State,
) {
  public shared ({ caller }) func submitFeedback(
    userType : Text,
    rating : Nat,
    message : Text,
  ) : async Common.Result<Nat, Text> {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getAllFeedback() : async [FeedbackTypes.Feedback] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func updateFeedbackStatus(
    id : Nat,
    status : Text,
  ) : async Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };
};
