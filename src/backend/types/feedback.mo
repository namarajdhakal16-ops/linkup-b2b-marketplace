import Common "common";

module {
  public type UserId = Common.UserId;

  public type FeedbackStatus = {
    #new_;
    #reviewed;
    #closed;
  };

  public type Feedback = {
    id : Nat;
    userId : UserId;
    userType : Text;
    rating : Nat;
    message : Text;
    status : FeedbackStatus;
    createdAt : Common.Timestamp;
  };
};
