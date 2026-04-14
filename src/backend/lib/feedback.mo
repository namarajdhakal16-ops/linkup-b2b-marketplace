import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Types "../types/feedback";
import Common "../types/common";

module {
  public type State = {
    feedbacks : List.List<Types.Feedback>;
    var nextId : Nat;
  };

  public func submitFeedback(
    state : State,
    caller : Principal,
    userType : Text,
    rating : Nat,
    message : Text,
    now : Common.Timestamp,
  ) : Common.Result<Nat, Text> {
    Runtime.trap("not implemented");
  };

  public func getAllFeedback(state : State) : [Types.Feedback] {
    Runtime.trap("not implemented");
  };

  public func updateFeedbackStatus(
    state : State,
    id : Nat,
    status : Text,
  ) : Common.Result<(), Text> {
    Runtime.trap("not implemented");
  };
};
